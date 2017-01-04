<?php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class TestController extends Controller 
{
    /**
    * @Route("/test", name="test")
    * @Method({"GET"})
    */
    public function getTest(Request $request) 
    {
        $repo = $this->getDoctrine()
            ->getManager()
            ->getRepository('AppBundle:Test');

        $entity = $repo->findOneByMyKey('zikoss');
        
        $serializedEntity = $this->container->get('serializer')->serialize($entity, 'json');
        return new JsonResponse($serializedEntity);
    }
}