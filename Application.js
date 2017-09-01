var Ext = Ext || {};

Ext.define('Tsip2.Application', {
    name: 'Tsip2',
    extend: 'Ext.app.Application',
    views: [
        'Tsip2.view.main.Main',
        'Tsip2.view.main.Encabezado',
        'Tsip2.view.main.PanelOpciones',
        'Tsip2.view.main.registro.Principal',
        'Tsip2.view.main.tab.TabAcusatorio',
        'Tsip2.view.main.registro.RegistroApelacion'
    ],    
    stores: [
        'Tsip2.store.OpcionesAcusatorio',
        'Tsip2.store.DistritoStore',
        'Tsip2.store.LocalidadStore',
        'Tsip2.store.TipoJuzgado',
        'Tsip2.store.DepartamentoStore',
        'Tsip2.store.TipoCuadernoStore'
    ],
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
