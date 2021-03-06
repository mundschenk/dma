/*
 * File: app/view/PartnerImportPanel.js
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

Ext.define('MyApp.view.PartnerImportPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.partnerimportpanel',

    height: 550,
    itemId: 'PartnerImportPanel',
    width: 782,
    autoDestroy: false,
    layout: {
        type: 'border'
    },
    title: 'Import',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    region: 'north',
                    height: 71,
                    itemId: 'PartnerImportUploadFormPanel',
                    bodyPadding: 10,
                    titleCollapse: false,
                    items: [
                        {
                            xtype: 'filefield',
                            anchor: '100%',
                            itemId: 'PartnerImportFileUpload',
                            fieldLabel: 'CSV Datei',
                            buttonText: 'Auswählen...'
                        },
                        {
                            xtype: 'button',
                            itemId: 'PartnerImportResetButton',
                            text: 'Zurücksetzen'
                        },
                        {
                            xtype: 'button',
                            itemId: 'PartnerImportUploadButton',
                            text: 'Upload'
                        }
                    ]
                },
                {
                    xtype: 'treepanel',
                    region: 'center',
                    itemId: 'PartnerImportGridPanel',
                    collapsible: false,
                    enableColumnHide: false,
                    enableColumnMove: false,
                    rowLines: true,
                    store: 'ImportPartnerTreeStore',
                    rootVisible: false,
                    useArrows: true,
                    viewConfig: {
                        getRowClass: function(record) {
                            if (record.data.leaf !== true) {
                                for (var idx in record.childNodes) {
                                    if (
                                    record.childNodes[idx].data.post_anrede != record.data.post_anrede
                                    || record.childNodes[idx].data.post_name1 != record.data.post_name1
                                    || record.childNodes[idx].data.post_name2 != record.data.post_name2
                                    || record.childNodes[idx].data.post_strasse != record.data.post_strasse
                                    || record.childNodes[idx].data.post_plz != record.data.post_plz
                                    || record.childNodes[idx].data.post_ort != record.data.post_ort
                                    || record.childNodes[idx].data.druck_hg_tel != record.data.druck_hg_tel
                                    ) {
                                        return 'conflict';
                                    }
                                }
                            } 

                        },
                        stripeRows: true,
                        rootVisible: false
                    },
                    columns: [
                        {
                            xtype: 'treecolumn',
                            dataIndex: 'text',
                            text: 'Daten',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'post_anrede',
                            text: 'Anrede',
                            editor: {
                                xtype: 'textfield'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'post_name1',
                            text: 'Name1',
                            editor: {
                                xtype: 'textfield'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'post_name2',
                            text: 'Name2',
                            editor: {
                                xtype: 'textfield'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'post_strasse',
                            text: 'Strasse',
                            editor: {
                                xtype: 'textfield'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'post_plz',
                            text: 'Ort',
                            editor: {
                                xtype: 'textfield'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'post_ort',
                            text: 'PLZ',
                            editor: {
                                xtype: 'textfield'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'druck_hg_tel',
                            text: 'Telefon',
                            editor: {
                                xtype: 'textfield'
                            }
                        }
                    ],
                    selModel: Ext.create('Ext.selection.CellModel', {

                    }),
                    plugins: [
                        Ext.create('Ext.grid.plugin.CellEditing', {
                            listeners: {
                                beforeedit: {
                                    fn: me.onCellEditingBeforeEdit,
                                    scope: me
                                },
                                edit: {
                                    fn: me.onCellEditingEdit,
                                    scope: me
                                }
                            }
                        })
                    ]
                },
                {
                    xtype: 'form',
                    region: 'south',
                    height: 45,
                    itemId: 'PartnerImportImportFormPanel',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'PartnerImportImportButton',
                            text: 'Import'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onCellEditingBeforeEdit: function(editor, e, eOpts) {
        var _event = e;

        if (e.record.data.leaf === true) {

            e.record.parentNode.set(e.field, e.record.data[e.field]);

            var params = new Object();
            params.id = e.record.parentNode.data.idx;
            params.partner_nr = e.record.parentNode.data.partner_nr;
            params[e.field] = e.record.data[e.field];

            Ext.Ajax.request({
                url: '/import/partnercompare',
                method: 'PUT',
                jsonData: JSON.stringify(params),
                success: function(response, opts) {
                    _event.record.parentNode.commit();
                },
                failure: function(response, opts) {
                    //console.log('server-side failure with status code ' + response.status);
                }
            });

            return false;
        }
    },

    onCellEditingEdit: function(editor, e, eOpts) {
        var _event = e;

        if (e.record.data.leaf === false) {
            var params = new Object();
            params.id = e.record.data.idx;
            params.partner_nr = e.record.data.partner_nr;
            params[e.field] = e.record.data[e.field];

            Ext.Ajax.request({
                url: '/import/partnercompare',
                method: 'PUT',
                jsonData: JSON.stringify(params),
                success: function(response, opts) {
                    _event.record.commit();
                },
                failure: function(response, opts) {
                    //console.log('server-side failure with status code ' + response.status);
                }
            });

            return false;
        }
    }

});