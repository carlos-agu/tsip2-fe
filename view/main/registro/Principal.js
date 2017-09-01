var Ext = Ext || {};

Ext.define('Tsip2.view.main.registro.Principal', {
    extend: 'Ext.panel.Panel',
    xtype: 'registro.principal',
    title: 'Datos Principales',
    layout: {
        type: 'table',
        columns: 2
    },
    defaults: {
        bodyStyle: 'padding:20px',
        margin: 5
    },
    items: [
        {
            xtype: 'combo',
            fieldLabel: 'Tipo de Asunto'
        },
        {
            xtype: 'combo',
            fieldLabel: 'Interpone'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'No. de Oficio',
            width: 175
        },
        {
            xtype: 'datefield',
            value: new Date(),
            fieldLabel: 'De Fecha'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Duración DVD (hh:mm:ss)',
            width: 200
        },
        {
            xtype: 'combo',
            fieldLabel: 'Tipo de Resolución'
        },
        {
            xtype: 'combo',
            fieldLabel: 'Resolución',
            colspan: 2,
            width: 563
        },
        {
            xtype: 'combo',
            fieldLabel: 'Se Recibio'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'No. de Fojas',
            width: 200
        }
    ]
});


