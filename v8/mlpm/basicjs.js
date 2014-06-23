// JS Aray instead HTML Markup

var arrMenu = [
	{
		title: 'Aluar',
		icon: 'fa fa-reorder',
		items: [
			{
				name: 'Quiénes Somos',
				icon: 'fa fa-group',
				link: '#',
				items: [
					{
						title: 'Quiénes Somos',
						icon: 'fa fa-group',
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
												name: 'Estructura de la compañía',
												link: '#'
											},
											{
												name: 'Compañías del Grupo',
												link: '#'
											},
											{
												name: 'Sistemas de Calidad y Gestión Industrial',
												link: '#'
											}
						]
					}
				]
			},
			{
				name: 'El Aluminio',
				icon: 'fa fa-cog fa-spin',
				link: '#',
				items: [
					{
						title: 'El Aluminio',
						icon: 'fa fa-cog fa-spin',
						items: [
							{
								name: 'Usos y Aplicaciones',
								link: '#'
							},
							{
								name: 'Historia de la Industria del Aluminio',
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
				icon: 'fa fa-recycle',
				link: '#',
				items: [
					{
						title: 'Desarrollo Sustentable',
						icon: 'fa fa-recycle',
						items: [
							{
								name: 'Sistema Productivo',
								link: '#'
							},
							{
								name: 'Reportes de Sustentabilidad',
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
								name: 'Compromiso con la Comunidad',
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
								icon: 'fa fa-cubes',
								link: '#',
								items: [
									{
										title: 'División Elaborados',
										icon: 'fa fa-cubes',
										items: [
													{
														name: 'Laminados',
														icon: 'fa fa-road',
														link: '#',
														items: [
															{
																title: 'Laminados',
																icon: 'fa fa-road',
																items: [
																	{
																		name: 'Planchas',
																		link: '#'
																	},
																	{
																		name: 'Chapas y Rollos lisos',
																		link: '#'
																	},
																	{
																		name: 'Chapas y Rollos graforados',
																		link: '#'
																	},
																	{
																		name: 'Foil',
																		link: '#'
																	}
																]
															}
														]
													}
											,
													{
														name: 'Extruídos',
														icon: 'fa fa-empire',
														link: '#',
														items: [
															{
																title: 'Extruídos',
																icon: 'fa fa-empire',
																items: [
																	{
																		name: 'Sistemas de Carpintería',
																		link: '#'
																	},
																	{
																		name: 'Barras perfiladas',
																		link: '#'
																	},
																	{
																		name: 'Perfiles indrustriales',
																		link: '#'
																	},
																	{
																		name: 'Transporte',
																		link: '#'
																	}
																]
															}
														]
													}
										]
									}
								]
							},
							{
								name: 'División Primarios',
								icon: 'fa fa-tasks',
								link: '#',
								items: [
									{
										title: 'División Primarios',
										icon: 'fa fa-tasks',
										items: [
											{
												name: 'Lingote de aleación',
												link: '#'
											},
											{
												name: 'Lingotes T y prismáticos',
												link: '#'
											},
											{
												name: 'Barrotes para extrusión',
												link: '#'
											},
											{
												name: 'Bobina de alambrón',
												link: '#'
											},
											{
												name: 'Placa para deformación',
												link: '#'
											},
											{
												name: 'Chancha de zincalum',
												link: '#'
											},
											{
												name: 'Lingote de aluminio puro',
												link: '#'
											}
										]
									}
								]
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
								name: 'Desarrollo de Nuevos Productos',
								link: '#'
							}
						]
					}
				]
			},
			{
				name: 'Información Financiera y Contable',
				icon: 'fa fa-book',
				link: '#',
				items: [
					{
						title: 'Información Financiera y Contable',
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
								name: 'Comisión Nacional de Valores',
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
								name: 'Programas de Pasantías',
								link: '#'
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
				name: 'Contactos',
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
		menuInactiveClass: 'mlpm_inactive',
		
		menuWidth: '80%'
	});
});


