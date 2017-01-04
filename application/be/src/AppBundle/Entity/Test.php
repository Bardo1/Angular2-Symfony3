<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Test
 *
 * @ORM\Table(name="test")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\TestRepository")
 */
class Test
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="MyKey", type="string", length=255, nullable=true)
     */
    private $myKey;

    /**
     * @var int
     *
     * @ORM\Column(name="MyValue", type="integer", nullable=true)
     */
    private $myValue;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set myKey
     *
     * @param string $myKey
     *
     * @return Test
     */
    public function setMyKey($myKey)
    {
        $this->myKey = $myKey;

        return $this;
    }

    /**
     * Get myKey
     *
     * @return string
     */
    public function getMyKey()
    {
        return $this->myKey;
    }

    /**
     * Set myValue
     *
     * @param integer $myValue
     *
     * @return Test
     */
    public function setMyValue($myValue)
    {
        $this->myValue = $myValue;

        return $this;
    }

    /**
     * Get myValue
     *
     * @return int
     */
    public function getMyValue()
    {
        return $this->myValue;
    }
}

