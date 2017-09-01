var Ext = Ext || {};

Ext.define('Tsip2.store.DepartamentoStore', {
    extend: 'Ext.data.Store',    
    model: 'Tsip2.model.Departamento',
    proxy: {
       type: 'rest' ,
       url: 'http://localhost:8080/Tsip2/rest/departamento'       
    }
});


