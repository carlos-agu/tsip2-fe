var Ext = Ext || {};
Ext.define('Tsip2.store.LocalidadStore',{
    extend: 'Ext.data.Store',
    model:'Tsip2.model.Localidad',    
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/Tsip2/rest/vlocalidad'       
    }
});
