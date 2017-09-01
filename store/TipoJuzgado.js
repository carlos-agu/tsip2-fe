var Ext = Ext || {};
Ext.define('Tsip2.store.TipoJuzgado', {
    extend: 'Ext.data.Store',
    fields: [{
            name: 'id',
            type: 'int'
        },
        {
            name: 'descripcion',
            type: 'string'
        }
    ],
    data:[
        {id: 0, descripcion: 'ACUSATORIO'},
        {id: 1, descripcion: 'TRADICIONAL'}
    ]
});

