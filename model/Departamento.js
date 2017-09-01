var Ext = Ext || {};

Ext.define('Tsip2.model.Departamento',{
    extend: 'Ext.data.Model',
    idProperty: 'cveDepto',
    fields:[
        {name: 'cveDepto', type:'auto'},
        {name: 'descDeptoCorta', type:'string'},
        {name: 'noCiudad', type:'int'},
        {name: 'noDistrito', type:'int'}
    ]    
});

