import { Cliente, Telefone, Endereco, Empresa } from './modulo-cadastro/modulo-cadastro.js'

let endereco = new Endereco('SP', 'São José dos Campos', 'José Longo', '123')
let tel1 = new Telefone('(12)','999999999')
let tel2 = new Telefone('(12)','888888888')
 
let empresa = new Empresa('ABC LTDA', 'Mercado Online', '12345678910', endereco)
empresa.telefones.add(tel1)
empresa.telefones.add(tel2)
 
// Cliente 1
let end_c1 = new Endereco('SP', 'São José dos Campos', 'Andrômeda', '111')
let tel_c1_1 = new Telefone('(12)', '11111111')
let tel_c1_2 = new Telefone('(12)', '11111112')
let cliente1 = new Cliente('Ana', '11111111111', end_c1)
cliente1.telefones.add(tel_c1_1)
cliente1.telefones.add( tel_c1_2)
 
// Cliente 2
let end_c2 = new Endereco('SP', 'São José dos Campos', 'Rua 02', '222')
let tel_c2_1 = new Telefone('(12)', '22222222')
let tel_c2_2 = new Telefone('(12)', '22222223')
let cliente2 = new Cliente('Bruna', '22222222222', end_c2)
cliente2.telefones.add(tel_c2_1)
cliente2.telefones.add( tel_c2_2)
 
// Cliente 3
let end_c3 = new Endereco('SP', 'São Paulo', 'Avenida Paulista', '333')
let tel_c3_1 = new Telefone('(11)', '3333333333')
let tel_c3_2 = new Telefone('(11)', '3333333334')
let cliente3 = new Cliente('Carol', '333333333333', end_c3)
cliente3.telefones.add(tel_c3_1)
cliente3.telefones.add(tel_c3_2)
 
// Cliente 4
let end_c4 = new Endereco('PR', 'Curitiba', 'Avenida dos Curitibanos', '444')
let tel_c4_1 = new Telefone('(41)', '4444444444')
let tel_c4_2 = new Telefone('(41)', '44444444445')
let cliente4 = new Cliente('Duda', '4444444444444', end_c4)
cliente4.telefones.add(tel_c4_1)
cliente4.telefones.add(tel_c4_2)
 
// Cliente 5
let end_c5 = new Endereco('CE', 'Fortaleza', 'Avenida de Fortaleza', '555')
let tel_c5_1 = new Telefone('(85)', '55555555555')
let tel_c5_2 = new Telefone('(85)', '55555555556')
let cliente5 = new Cliente('Eloísa', '55555555555', end_c5)
cliente5.telefones.add(tel_c5_1)
cliente5.telefones.add(tel_c5_2)
 
// Adiciona clientes a empresa
empresa.clientes.add(cliente1)
empresa.clientes.add(cliente2)
empresa.clientes.add(cliente3)
empresa.clientes.add(cliente4)
empresa.clientes.add(cliente5)
 
console.log(empresa.mostrarDetalhe())