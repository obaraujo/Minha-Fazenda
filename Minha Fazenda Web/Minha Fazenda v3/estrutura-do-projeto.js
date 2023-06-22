const dados = {
	Produtores: {
		id: {
			Nome: '',
			DataNascimento: '',
			Sexo: '',
			Senha: '',
			ImagemPerfil: '',
			Propriedades: {
				id: {
					Nome: '',
					Localização: {
						Cidade: '',
						Estado: '',
						CoordenadasGeográficas: ''
					},
					Tamanho: {
						Largura: '',
						Comprimento: '',
						Hectares: ''
					},
					ValorPago: '',
					Anotações: '',
					Plantações: { id: 'nome' },
					Pessoas: { id: 'nome' }
				}
			},
			Plantações: {
				id: {
					Nome: '',
					Propriedade: '',
					Trabalhadores: [],
					ValoresGastos: {
						id: {
							Data: '',
							Descrição: '',
							Imagens: []
						}
					},
					Cultura: {
						Nome: '',
						ComprimentoLeiras: '',
						EspaçamentoLeiras: '',
						EspaçamentoPlantas: '',
						Anotações: '',
						Imagens: []
					},
					Eventos: {
						id: {
							Data: '',
							Descrição: '',
							Imagens: []
						}
					},
					Colheitas: {
						id: {
							Data: '',
							ValorGanho: '',
							Imagens: []
						}
					},
					ÁreaUsada: {
						Comprimento: '',
						Largura: ''
					}

				}
			},
			Animais: {
				id: {
					Nome: '',
					Pai: '',
					Mãe: '',
					Tipo: '',
					Raça: '',
					Sexo: '',
					Eventos: {
						id: {
							Data: '',
							Descrição: '',
							Imagens: []
						}
					},
					Gastos: {
						id: {
							Data: '',
							Descrição: '',
							Imagens: []
						}
					},
					Anotações: ''
				}
			},
			Compras: {
				id: {
					Data: '',
					Descrição: '',
					Valor: '',
					Imagens: []
				}
			},
			Pessoas: {
				id: {
					Nome: '',
					Senha: '',
					ImagemPerfil: '',
					DataNascimento: '',
					Sexo: '',
					Parentesco: '',
					Eventos: {
						id: {
							Data: '',
							Descrição: '',
							Imagens: []
						}
					},
					Plantações: {
						ID: {
							Nome: '',
							Propriedade: '',
							Trabalhadores: [],
							ValoresGastos: {
								id: {
									Data: '',
									Descrição: '',
									Imagens: []
								}
							},
							Cultura: {
								Nome: '',
								ComprimentoLeiras: '',
								EspaçamentoLeiras: '',
								EspaçamentoPlantas: '',
								Anotações: '',
								Imagens: []
							},
							Eventos: {
								id: {
									Data: '',
									Descrição: '',
									Imagens: []
								}
							},
							Colheitas: {
								id: {
									Data: '',
									ValorGanho: '',
									Imagens: []
								}
							},
							ÁreaUsada: {
								Comprimento: '',
								Largura: ''
							}
						}

					},
					Animais: {
						id: {
							Nome: '',
							Pai: '',
							Mãe: '',
							Tipo: '',
							Raça: '',
							Sexo: '',
							Eventos: {
								id: {
									Data: '',
									Descrição: '',
									Imagens: []
								}
							}
						},
						Gastos: {
							id: {
								Data: '',
								Descrição: '',
								Imagens: []
							}
						},
						Anotações: ''
					},
					Compras: {
						id: {
							Data: '',
							Descrição: '',
							Valor: '',
							Imagens: []
						}
					}
				}
			}
		}
	}
}

console.log(JSON.stringify(dados))