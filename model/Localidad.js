var Ext = Ext || {};

Ext.define('Tsip2.model.Localidad', {
    extend: 'Ext.data.Model',
    idProperty: 'cveLocalidad',
    fields: [
        {name: 'cveLocalidad', type: 'int'}, {name: 'cveEstado', type: 'int'}, {name: 'nombreLocalidad', type: 'string'}, 
        {name: 'noDistrito', type: 'int', reference: 'Distrito'}
    ]
});

