var Ext = Ext || {};
Ext.define('Tsip2.store.DistritoStore', {
    extend: 'Ext.data.Store',
    storeId: 'distritoStore',    
    model:'Tsip2.model.Distrito',    
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/Tsip2/rest/vdistrito',
        reader: {
            type: 'json'
        }
    },
    listeners:{
        load: function( store , records , successful , operation , eOpts){
            if(!successful){
                Ext.Msg.alert('Error al cargar los distritos', 'No se pudo establecer conexión con el servidor de aplicaciones');
            }
        }
    }
});


