/*
 * File: app/view/ImportPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ImportPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.importpanel',

    height: 250,
    itemId: 'ImportPanel',
    width: 400,
    layout: {
        type: 'border'
    },
    closable: true,
    title: 'Import',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    region: 'west',
                    split: true,
                    itemId: 'ImportImportGridPanel',
                    width: 150,
                    columnLines: false,
                    hideHeaders: true,
                    store: 'ImportImportJsonStore',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'title',
                            text: 'String',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    region: 'center',
                    split: true,
                    itemId: 'ImportImportTabPanel'
                }
            ]
        });

        me.callParent(arguments);
    }

});