var Ext = Ext || {};

Ext.define('Tsip2.view.main.tab.TabAcusatorio', {
    extend: 'Ext.panel.Panel',
    title: 'Acusatorio',
    xtype: 'tabAcusatorio',
    items: [
        {
            xtype: 'treepanel',
            title:'Seleccione una Opción',
            store: {
                type: 'optAcusatorio'
            },
            rootVisible: false,
            listeners: {
                select: 'onItemSelected'
            }
        }
    ]
});

