var Ext = Ext || {};

Ext.define('Tsip2.store.OpcionesAcusatorio', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.optAcusatorio',
    root: {
        expanded: true,        
        children: [
            {text: 'Registro de Asuntos', leaf: true, iconCls:'fa fa-pencil-square'},
            {text: 'Consultas', leaf: true, iconCls: 'fa  fa-search'},
            {text: 'Enviar Turno a Salas', leaf: true, iconCls:'fa fa-send'},
            {text: 'Informes', leaf: true, iconCls:'fa fa-bar-chart'}
        ]
    }
});


