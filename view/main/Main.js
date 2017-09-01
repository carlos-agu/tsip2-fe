var Ext = Ext || {};
Ext.define('Tsip2.view.main.Main', {
    extend: 'Ext.panel.Panel',    
    requires:[
        'Tsip2.view.main.MainController'
    ],
    controller: 'main',
    xtype: 'main',
    layout: 'border',
    
    items: [
        {
            xtype: 'encabezado',
            region: 'north'
        },
        {
            xtype: 'panelOpt',
            region: 'west'
        },
        {
            xtype: 'panel',
            reference: 'centerPanel',
            region: 'center',
            layout: 'card',            
            items:[
                {
                    xtype:'registroAp'     
                },
                {
                    xtype:'component',
                    html: 'Consultas'
                },
                {
                    xtype:'component',
                    html: 'Enviar turno'
                }
            ]
        }
    ]
});

