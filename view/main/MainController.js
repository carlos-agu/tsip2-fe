var Ext = Ext || {};
Ext.define('Tsip2.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',    
  
    onItemSelected: function (s, r) {
        this.lookupReference('centerPanel').getLayout().setActiveItem(r.data.index);
    },
    
    cargarLocalidad: function (cmbDistrito) {        
        var cmbLocalidad = Ext.getCmp('cmbLocalidad');
        cmbLocalidad.clearValue();
        var store = Ext.create('Tsip2.store.LocalidadStore');
        store.proxy.url = store.proxy.url + "/" + cmbDistrito.getValue();
        store.load();
        cmbLocalidad.bindStore(store);
    },
    
    cargarDepto: function(){
        var cmbLocalidad = Ext.getCmp('cmbLocalidad');
        var cmbDistrito = Ext.getCmp('cmbDistrito');        
        var cmbDepto = Ext.getCmp('cmbDepto');
        cmbDepto.clearValue();
        var store = Ext.create('Tsip2.store.DepartamentoStore');
        var tipoJuz = Ext.getCmp('cmbTipoJuzgado').getValue();
        if(tipoJuz){
            store.proxy.url = store.proxy.url  + '/' +  cmbDistrito.getValue() + '/' + cmbLocalidad.getValue() + '/false';
        }else{
            store.proxy.url = store.proxy.url  + '/' +  cmbDistrito.getValue() + '/' + cmbLocalidad.getValue() + '/true';
        }
        store.load();
        cmbDepto.bindStore(store);
    },

    cargarExp: function(f,e){
        if(e.getKey() == e.ENTER){
            console.log('Enviando informacion al servidor')
            Ext.getCmp('formaRegistro').getForm().load({
                url: '',                
                method: 'POST',
                success:function(form, result, data){
                    
                }                
            });
        }
    }    
});


