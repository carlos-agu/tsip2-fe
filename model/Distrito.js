var Ext = Ext || {};
Ext.define('Tsip2.model.Distrito',{
    extend: 'Ext.data.Model',
    idProperty: 'noDistrito',
    fields:[
        {name: 'noDistrito', type: 'int'},
        {name: 'descDistrito', type: 'string'}
    ]    
});


