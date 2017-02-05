<?php

namespace AppBundle\Entity;

/**
 * Credentials
 */
class Credentials
{
    /**
     * @var string
     */
    private $login;

    /**
     * @var string
     */
    private $password;

    /**
     * Get login
     *
     * @return string
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Set login
     *
     * @param string $login
     *
     * @return Credentials
     */
    public function setLogin($login)
    {
        $this->login = $login;
    }

    /**
     * Get password
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set password
     *
     * @param string $password
     *
     * @return Credentials
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }
}