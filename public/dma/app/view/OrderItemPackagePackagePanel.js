/*
 * File: app/view/OrderItemPackagePackagePanel.js
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

Ext.define('MyApp.view.OrderItemPackagePackagePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.orderitempackagepackagepanel',

    height: 492,
    itemId: 'OrderItemPackagePackagePanel',
    width: 400,
    title: 'Pakete',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    itemId: 'OrderItemPackagePackageToolbar',
                    items: [
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'OrderItemPackagePackageEditButton',
                            text: 'Bearbeiten'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'OrderItemPackagePackageSaveButton',
                            text: 'Speichern'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'OrderItemPackagePackageCancelButton',
                            text: 'Abbrechen'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'OrderItemPackagePackageDeleteButton',
                            text: 'Löschen'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'form',
                    disabled: true,
                    itemId: 'OrderItemPackagePackageFormPanel',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Mantel',
                            name: 'frame_type_title',
                            value: 'Display Field'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Packet',
                            name: 'package_type_title',
                            value: 'Display Field'
                        },
                        {
                            xtype: 'checkboxfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'readytosend',
                            boxLabel: 'fertig zum Versand',
                            inputValue: '1',
                            uncheckedValue: '0'
                        },
                        {
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: 'Ausgangsdatum',
                            name: 'outgoing'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Sendungsnummer',
                            name: 'sendingnumber'
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    itemId: 'OrderItemPackagePackageGridPanel',
                    store: 'PackagePackageJsonStore',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                return record.data.frame_type.title;
                            },
                            dataIndex: 'frame_type.title',
                            text: 'Mantel'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                return record.data.package_type.title;
                            },
                            dataIndex: 'package_type.title',
                            text: 'Packet'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'amount',
                            text: 'Menge'
                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'outgoing',
                            text: 'Ausgang'
                        },
                        {
                            xtype: 'checkcolumn',
                            dataIndex: 'readytosend',
                            text: 'versandfertig'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'sendingnumber',
                            text: 'Sendungsnummer'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});