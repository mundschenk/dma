<?php

class Product_Model_DbTable_Itemhasproductcustomize extends Rest_Db_Table
{

    protected $_name = 'product_item_has_product_customize';
    protected $_rowClass = 'Product_Model_Itemhasproductcustomize';

	protected $_referenceMap = array(
		'fk_product_item_has_product_customize_product_customize1' => array(
			'columns'		=> array('product_customize_id'),
			'refTableClass'	=> 'Product_Model_DbTable_Customize',
			'refColumns'	=> array('idproduct_customize')
		),
		'fk_product_item_has_product_customize_product_item1' => array(
			'columns'		=> array('product_item_id'),
			'refTableClass'	=> 'Product_Model_DbTable_Item',
			'refColumns'	=> array('id')
		)
	);

}