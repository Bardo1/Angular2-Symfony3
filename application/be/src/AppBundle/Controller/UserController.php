<?php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use AppBundle\Form\Type\UserType;
use AppBundle\Entity\User;

class UserController extends Controller
{
    /**
     * @Rest\View(serializerGroups={"user"})
     */
    public function getUsersAction()
    {
        $users = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:User')
                ->findAll();

        return $users;
    }

    /**
     * @Rest\View(statusCode=Response::HTTP_CREATED, serializerGroups={"user"})
     */
    public function postUsersAction(Request $request)
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user, ['validation_groups'=>['Default', 'New']]);

        $form->submit($request->request->all());

        if ($form->isValid()) {
            $encoder = $this->get('security.password_encoder');
            // Encodes the password
            $encoded = $encoder->encodePassword($user, $user->getPlainPassword());
            $user->setPassword($encoded);

            $em = $this->get('doctrine.orm.entity_manager');
            $em->persist($user);
            $em->flush();
        } else {
            $user = $form;
        }

        return $user;
    }

     /**
     * @Rest\View(serializerGroups={"user"})
     * @Rest\Put("/users/{id}")
     */
    public function putUserAction(Request $request)
    {
        return $this->updateUser($request, true);
    }

    /**
     * @Rest\View(serializerGroups={"user"})
     * @Rest\Patch("/users/{id}")
     */
    public function patchUserAction(Request $request)
    {
        return $this->updateUser($request, false);
    }

    private function updateUser(Request $request, $clearMissing)
    {
        $user = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:User')
                ->find($request->request->get('id'));

        if (empty($user)) {
            $user = userNotFound();
        } else {

            if ($clearMissing) { 
                $options = ['validation_groups'=>['Default', 'FullUpdate']];
            } else {
                $options = ['validation_groups'=>['PartialUpdate']];
            }

            $form = $this->createForm(UserType::class, $user, $options);
            $form->submit($request->request->all(), $clearMissing);

            if ($form->isValid()) {
                if (!empty($user->getPlainPassword())) {
                    $encoder = $this->get('security.password_encoder');
                    $encoded = $encoder->encodePassword($user, $user->getPlainPassword());
                    $user->setPassword($encoded);
                }
                $em = $this->get('doctrine.orm.entity_manager');
                $em->merge($user);
                $em->flush();
            } else {
                $user = $form;
            }
        }

        return $user;
    }

    private function userNotFound() 
    {
        throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException('User not found');
    }
}