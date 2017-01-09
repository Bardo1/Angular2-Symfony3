<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\View\View;

class JsonResourceController extends Controller 
{
    /**
     * @Rest\View()
     * @Rest\Get("/jsonresources/{id}")
     */
    public function getJsonResourcesAction(Request $request) 
    {
        return new JsonResponse(
            ["HOME" => [
                "TITLE" => "Hello word!",
                "SUBTITLE" => "This text comes from ng2-translate"
            ]], Response::HTTP_OK);
    }
}