Ext.define('Tsip2.store.TipoCuadernoStore', {
    extend: 'Ext.data.Store',
    model: 'Tsip2.model.TipoCuaderno',
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/Tsip2/rest/tipocuaderno' 
    }
});