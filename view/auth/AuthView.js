var Ext = Ext || {};

Ext.define('Tsip2.view.auth.AuthView',{
    extend: 'Ext.form.Panel',
    alias: 'widget.authform',
    xtype:'login',    
    
    layout:{
        align: 'center',
        pack: 'center',
        type: 'hbox'
    },
    
    requires:['Tsip2.view.auth.AuthViewController'],
    
    controller:'auth',
    
    items:[
        {
            xtype: 'fieldset',
            width: 300,
            title: 'Log In',
            items:[
                {
                    xtype: 'textfield',
                    anchor: '100%', 
                    fieldLabel: 'Email'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    inputType: 'password',
                    fieldLabel: 'Password'
                },
                {
                    xtype: 'button',
                    anchor: '100%',
                    itemId: 'loginBtn',
                    text: 'Log In'
                }
            ]
        }
    ]
});

