var Ext = Ext || {};
Ext.define('Tsip2.view.ViewPort',{
    extend:'Ext.container.Viewport',
    alias:'widget.vp',    
    
    requires: [
        'Tsip2.view.auth.AuthView',
        'Tsip2.view.main.Main'
    ],
    
    layout:{
        type: 'card'
    },   
   
    items:[
        {
            xtype:'login'
        },
        {            
            xtype: 'main'               
        }
    ]
});
