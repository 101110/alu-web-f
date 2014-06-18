// JS Aray instead HTML Markup

var arrMenu = [
	{
		title: 'Aluar',
		icon: 'fa fa-reorder',
		items: [
			{
				name: 'Quiénes Somos',
				icon: 'fa fa-laptop',
				link: '#',
				items: [
					{
						title: 'Quiénes Somos',
						icon: 'fa fa-laptop',
						items: [
											{
												name: 'Aluar en Cifras',
												link: '#'
											},
											{
												name: 'Historia',
												link: '#'
											},
											{
												name: 'Estructura de Aluar',
												link: '#'
											},
											{
												name: 'Compañías del Grupo',
												link: '#'
											},
											{
												name: 'Calidad y Gestión',
												link: '#'
											}
						]
					}
				]
			},
			{
				name: 'El Aluminio',
				icon: 'fa fa-phone',
				link: '#',
				items: [
					{
						title: 'El Aluminio',
						icon: 'fa fa-phone',
						items: [
							{
								name: 'Usos y Aplicaciones',
								link: '#'
							},
							{
								name: 'Historia del Aluminio',
								link: '#'
							},
							{
								name: 'Productores',
								link: '#'
							},
							{
								name: 'Consumidores',
								link: '#'
							},
							{
								name: 'Proceso productivo',
								link: '#'
							}
						]
					}
				]
			},
			{
				name: 'Desarrollo Sustentable',
				icon: 'fa fa-tags',
				link: '#',
				items: [
					{
						title: 'Desarrollo Sustentable',
						icon: 'fa fa-tags',
						items: [
							{
								name: 'Sistema Productivo',
								link: '#'
							},
							{
								name: 'Reportes Sustentabilidad',
								link: '#'
							},
							{
								name: 'Salud y Seguridad',
								link: '#'
							},
							{
								name: 'Medioambiente',
								link: '#'
							},
							{
								name: 'Compromiso Comunidad',
								link: '#'
							}
						]
					}
				]
			},
			{
				name: 'Productos',
				icon: 'fa fa-shopping-cart',
				link: '#',
				items: [
					{
						title: 'Productos',
						icon: 'fa fa-shopping-cart',
						items: [
							{
								name: 'División Elaborados',
								link: '#'
							},
							{
								name: 'División Primario',
								link: '#'
							},
							{
								name: 'Calidad',
								link: '#'
							},
							{
								name: 'Logística',
								link: '#'
							},
							{
								name: 'Ventas por Región',
								link: '#'
							},
							{
								name: 'Desarrollo Productos',
								link: '#'
							}
						]
					}
				]
			},
			{
				name: 'Información Financiera',
				icon: 'fa fa-book',
				link: '#',
				items: [
					{
						title: 'Información Financiera',
						icon: 'fa fa-book',
						items: [
							{
								name: 'Resumen Financiero',
								link: '#'
							},
							{
								name: 'Balances y Memorias',
								link: '#'
							},
							{
								name: 'Hechos Relevantes',
								link: '#'
							},
							{
								name: 'Acciones',
								link: '#'
							},
							{
								name: 'CNV',
								link: '#'
							}
						]
					}
				]
			},
			{
				name: 'Trabajar en Aluar',
				icon: 'fa fa-male',
				link: '#',
				items: [
					{
						title: 'Trabajar en Aluar',
						icon: 'fa fa-male',
						items: [
							{
								name: 'Becas',
								link: '#'
							},
							{
								name: 'Programas Pasantías',
								icon: 'fa fa-female',
								link: '#',
								items: [
									{
										title: 'Programas Pasantías',
										icon: 'fa fa-female',
										items: [
											{
												name: 'Pasantías secundarios',
												link: '#'
											},
											{
												name: 'Pasantías universitarias',
												link: '#'
											}
										]
									}
								]
							},
							{
								name: 'Envíanos tu CV',
								link: '#'
							}
						]
					}
				]
			},
			{
				name: 'Contacto',
				link: '#'
			}
		]
	}
];


$(document).ready(function(){
	// JS Array implementation, overlap mode
	$( '#menu' ).multilevelpushmenu({
		menu: arrMenu,
		containersToPush: [$( '#pushobj' )],
		collapsed: true,

		// Just for fun also changing the look of the menu
		wrapperClass: 'mlpm_w',
		menuInactiveClass: 'mlpm_inactive'
	});
});

