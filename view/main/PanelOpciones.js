var Ext = Ext || {};

Ext.define('Tsip2.view.main.PanelOpciones', {
    extend: 'Ext.panel.Panel',
    xtype: 'panelOpt',
    title: 'Opciones del Sistema',
    margin: '0 0 0 0',
    width: 230,
    collapsible: true,
    id: 'west-region-container',
    layout: 'fit',
    split: true,    
    items: [
        {
            xtype: 'tabpanel',
            items: [
                {
                    xtype: 'tabAcusatorio'
                },
                {
                    title: 'Tradicional'
                }
            ]
        }
    ]
});



