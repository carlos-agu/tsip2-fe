var Ext = Ext || {};

Ext.define('Tsip2.view.main.Encabezado', {
    extend: 'Ext.Component',
    html: '<b style="font-size:20pt">Tribunal Superior de Justicia del Estado de Chihuahua</b><br/><br/>Sistema de Turno Penal de 2da Instancia',
    height: 110,
    style: {
        textAlign: 'left',
        fontSize: '15pt',
        color: 'white',
        paddingTop: '30px',
        paddingLeft: '150px',
        backgroundColor: '#3a0f0e',
        backgroundImage: 'url(resources/images/tsj-logo-blanco.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '30px 10px',
        borderBottom: '1px solid gray'
    },
    
    
    xtype: 'encabezado'
});


