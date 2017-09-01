var Ext = Ext || {};

var gridStore = Ext.create('Ext.data.Store', {
    fields: ['name', 'email', 'phone'],
    data: [
        {name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224'},
        {name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234'},
        {name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244'},
        {name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254'}
    ]
});

Ext.define('Tsip2.view.main.registro.RegistroApelacion', {
    extend: 'Ext.panel.Panel',
    xtype: 'registroAp',
    title: 'Registro de Asuntos',
    layout: 'vbox',
    referenceHolder: true,
    items: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Nuevo',
                    iconCls: 'fa fa-file-o'

                },
                '-',
                {
                    text: 'Guardar',
                    iconCls: 'fa fa-save'

                },
                {
                    text: 'Cancelar',
                    iconCls: 'fa fa-times'
                }
            ]
        },
        {
            xtype: 'form',
            bodyPadding: 20,
            id:'formaRegistro',
            items: [
                {
                    xtype: 'panel',
                    layout: 'hbox',
                    title: 'Datos de la Causa',
                    items: [
                        {                            
                            xtype: 'combo',
                            id: 'cmbDistrito',
                            reference: 'cmbDistritoRef',
                            fieldLabel: 'Distrito:',
                            store: 'distritoStore',
                            displayField: 'descDistrito',
                            valueField: 'noDistrito',
                            matchFieldWidth: true,
                            margin: 5,
                            listeners: {
                                select: 'cargarLocalidad'
                            }
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: 'Localidad:',
                            id: 'cmbLocalidad',
                            store: 'Tsip2.store.LocalidadStore',
                            displayField: 'nombreLocalidad',
                            valueField: 'cveLocalidad',
                            matchFieldWidth: true,
                            margin: 5,
                            width: 400                            
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'combo',
                            fieldLabel: 'Tipo de Juzgado:',
                            margin: 5,
                            id: 'cmbTipoJuzgado',
                            store: 'Tsip2.store.TipoJuzgado',
                            displayField: 'descripcion',
                            valueField: 'id',
                            listeners:{
                                select:{
                                    fn:'cargarDepto'
                                }
                            }
                        },
                        {
                            xtype: 'combo',
                            id: 'cmbDepto',
                            store: 'Tsip2.store.DepartamentoStore',
                            displayField: 'descDeptoCorta',
                            valueField: 'cveDepto',
                            fieldLabel: 'Juzgado:',
                            margin: 5,
                            width: 400
                        }

                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'combo',
                            fieldLabel: 'Tipo Causa:',
                            store: 'Tsip2.store.TipoCuadernoStore',
                            valueField: 'clave',
                            displayField: 'clave',                            
                            margin: 5
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'No. Causa:',
                            margin: 5,
                            allowBlank: false,
                            width: 175,
                            regex: new RegExp('([0-9]+)\/[0-9]+'),
                            regexText: 'Error en el formato del numero de causa (número/año)',
                            listeners:{
                                specialKey:'cargarExp'
                            }
                            
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    title: 'Datos de la Apelación',
                    width: 800,
                    height: 600,
                    margin: 5,
                    items: [
                        {
                            xtype: 'registro.principal'
                        },
                        {
                            xtype: 'grid',
                            title: 'Imputados',
                            store: gridStore,
                            columns: [
                                {text: 'Nombre', dataIndex: 'name'}, {text: 'Email', dataIndex: 'email', flex: 1},
                                {text: 'Teléfono', dataIndex: 'phone'}
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Ofendidos'
                        },
                        {
                            xtype: 'panel',
                            title: 'Delitos'
                        }
                    ]
                }
            ]
        }
    ]

});


