/*
 * File: app/view/ReportReportPanel.js
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

Ext.define('MyApp.view.ReportReportPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportreportpanel',

    height: 557,
    itemId: 'ReportReportPanel',
    width: 753,
    layout: {
        type: 'border'
    },
    title: 'Report',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    itemId: 'ReportReportToolbar',
                    items: [
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'ReportReportEditButton',
                            text: 'Bearbeiten'
                        },
                        {
                            xtype: 'button',
                            itemId: 'ReportReportNewButton',
                            text: 'Neu'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'ReportReportSaveButton',
                            text: 'Speichern'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'ReportReportCancelButton',
                            text: 'Abbrechen'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'ReportReportDeleteButton',
                            text: 'Löschen'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'ReportReportPreviewButton',
                            text: 'Vorschau'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'ReportReportPrintButton',
                            text: 'Drucken'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'ReportReportExportButton',
                            text: 'Export'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'form',
                    region: 'north',
                    split: true,
                    disabled: true,
                    height: 209,
                    itemId: 'ReportReportFormPanel',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Title',
                            name: 'title'
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            fieldLabel: 'Beschreibung',
                            name: 'description'
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            fieldLabel: 'Query',
                            name: 'sql'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Dateiprefix',
                            name: 'fileprefix'
                        }
                    ]
                },
                {
                    xtype: 'form',
                    region: 'north',
                    split: true,
                    height: 150,
                    itemId: 'ReportFilterFormPanel',
                    bodyPadding: 10,
                    title: 'Filter'
                },
                {
                    xtype: 'gridpanel',
                    region: 'center',
                    split: true,
                    itemId: 'ReportPreviewGridPanel',
                    columns: [
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'bool',
                            text: 'Boolean'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});