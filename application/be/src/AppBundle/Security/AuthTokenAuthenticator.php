<?php

namespace AppBundle\Security;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\PreAuthenticatedToken;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;
use Symfony\Component\Security\Http\Authentication\SimplePreAuthenticatorInterface;
use Symfony\Component\Security\Http\HttpUtils;

class AuthTokenAuthenticator implements SimplePreAuthenticatorInterface, AuthenticationFailureHandlerInterface
{
    protected $container;
    protected $httpUtils;

    public function __construct(ContainerInterface $container, HttpUtils $httpUtils)
    {
        $this->container = $container;
        $this->httpUtils = $httpUtils;
    }

    public function createToken(Request $request, $providerKey)
    {
        $signUp = '/auth-tokens';
        $signIn = '/users';
        // The request is a sign in or a sign up
        if ($request->getMethod() === "POST" && ($this->httpUtils->checkRequestPath($request, $signIn) || $this->httpUtils->checkRequestPath($request, $signUp))) {
            return;
        }

        $authorization = $request->headers->get('Authorization');

        if (!$authorization) {
            throw new BadCredentialsException('Authorization header is required');
        } else {
            $auth_explode = explode(' ', $authorization);
            if (strtolower($auth_explode[0]) != "bearer") {
                throw new BadCredentialsException('Authorization Bearer is required');
            } else {
               $authTokenHeader = $auth_explode[1]; 
            }
        }

        return new PreAuthenticatedToken(
            'anon.',
            $authTokenHeader,
            $providerKey
        );
    }

    public function authenticateToken(TokenInterface $token, UserProviderInterface $userProvider, $providerKey)
    {
        if (!$userProvider instanceof AuthTokenUserProvider) {
            throw new \InvalidArgumentException(
                sprintf(
                    'The user provider must be an instance of AuthTokenUserProvider (%s was given).',
                    get_class($userProvider)
                )
            );
        }

        $authTokenHeader = $token->getCredentials();
        $authToken = $userProvider->getAuthToken($authTokenHeader);

        if (!$authToken || !$this->isTokenValid($authToken)) {
            throw new BadCredentialsException('Invalid authentication token');
        }

        $user = $authToken->getUser();
        $pre = new PreAuthenticatedToken(
            $user,
            $authTokenHeader,
            $providerKey,
            $user->getRoles()
        );

        $pre->setAuthenticated(true);

        return $pre;
    }

    public function supportsToken(TokenInterface $token, $providerKey)
    {
        return $token instanceof PreAuthenticatedToken && $token->getProviderKey() === $providerKey;
    }

    private function isTokenValid($authToken)
    {
        return (time() - $authToken->getCreatedDate()->getTimestamp()) < $this->container->getParameter('jwt_token_ttl');
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        throw $exception;
    }
}