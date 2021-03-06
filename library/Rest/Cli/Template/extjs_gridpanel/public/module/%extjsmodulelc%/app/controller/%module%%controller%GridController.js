/*
 * File: app/controller/%module%%controller%Controller.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('%extjsmodule%App.controller.%module%%controller%GridController', {
    extend: 'Ext.app.Controller',

    models: [
        '%module%%controller%Model'
    ],
    stores: [
        '%module%%controller%JsonStore'
    ],
    views: [
        'UsermgtViewport'
    ],

    onGridpanelSelect: function(selModel, record, index, options) {
        Ext.getCmp('%module%%controller%Form').loadRecord(record);
    },

    init: function(application) {
        this.control({
            "#%module%%controller%GridPanel": {
                select: this.onGridpanelSelect
            }
        });
    }

});
