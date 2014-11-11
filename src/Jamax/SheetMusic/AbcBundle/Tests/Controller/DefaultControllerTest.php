<?php

namespace Jamax\SheetMusic\AbcBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/abc/import');
        // TODO create a test to see make sure the page works correctly
        //$this->assertTrue($crawler->filter('html:contains("Hello Fabien")')->count() > 0);
    }
}
