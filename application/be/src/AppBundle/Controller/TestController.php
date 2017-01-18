<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\View\View;

use AppBundle\Form\Type\TestType;
use AppBundle\Entity\Test;

class TestController extends Controller 
{
    /**
     * @Rest\View(serializerGroups={"test"})
     */
    public function getTestsAction(Request $request) 
    {
        $tests = $this->getDoctrine()
            ->getManager()
            ->getRepository('AppBundle:Test')
            ->findAll();

        return $tests;
    }

    /**
     * @Rest\View(serializerGroups={"test"})
     */
    public function getTestAction($id, Request $request) 
    {
        $test = $this->getDoctrine()
            ->getManager()
            ->getRepository('AppBundle:Test')
            ->findOneByMyKey($id);

        if (empty($test)) {
            $test = \FOS\RestBundle\View\View::create(['message' => 'Test not found'], Response::HTTP_NOT_FOUND);
        }
        
        return $test;
    }
    
    /**
     * @Rest\View(statusCode=Response::HTTP_CREATED, serializerGroups={"test"})
     */
    public function postTestAction(Request $request)
    {
        $test = new Test();
        $form = $this->createForm(TestType::class, $test);

        $form->submit($request->request->all());
        
        if ($form->isValid()) 
        {
            $em = $this->get('doctrine.orm.entity_manager');
            $em->persist($test);
            $em->flush();
            return $test;
        } 
        else {
            return $form;
        }
    }
}