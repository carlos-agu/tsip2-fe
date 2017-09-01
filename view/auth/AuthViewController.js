

Ext.define('Tsip2.view.auth.AuthViewController',{
    
    extend:'Ext.app.ViewController',
  
    alias: 'controller.auth',    
    
    init: function(application){
        this.control({
            "button#loginBtn": {
                click: this.onLoginClick
            }
        });
    },   
    
    onLoginClick: function(button){
        //Process Auth
        button.up('vp').getLayout().setActiveItem(1);
    }
});