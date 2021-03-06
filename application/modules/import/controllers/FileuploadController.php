<?php

class Import_FileuploadController extends Zend_Controller_Action
{
	
	protected $_service = null;

    public function init()
    {
    	$this->_helper->contextSwitch()
    	->clearActionContexts()
    	->addActionContext('index', 'json')
    	->addActionContext('partner', 'json')
    	->addActionContext('order', 'json')
    	->addActionContext('execute', 'json')
    	->setDefaultContext('json')
    	->initContext('json')
    	;    	
    }
    
    protected function getService() {    	
    	if ($this->_service == null) {
    		$this->_service = new Import_Service_Fileupload();
    	}
    	
    	return $this->_service;
    }

    public function indexAction()
    {
        // action body
    }

    public function partnerAction() {
    	$result = $this->getService()->upload('partner');
    	foreach ($result as $key => $value) {
    		$this->view->$key = $value;
    	}
    }
    
    public function orderAction() {
    	$result = $this->getService()->upload('order');
    	foreach ($result as $key => $value) {
    		$this->view->$key = $value;
    	} 
    }

    public function executeAction() {
    	$result = $this->getService()->upload('execute');
    	foreach ($result as $key => $value) {
    		$this->view->$key = $value;
    	}
    }  
    
}