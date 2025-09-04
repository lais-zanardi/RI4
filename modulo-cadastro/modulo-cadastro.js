class Cliente{
    #cpf
    constructor(nome,cpf,endereco){
        this.nome = nome
        this.endereco = endereco
        this.#cpf = cpf
        this.telefones = new Set()
    }
 
    get pegaCpf() { return this.#cpf }
 
    #colocarMaiusculo(texto) { return texto.toUpperCase() }
 
    #colocarMinusculo(texto) { return texto.toLowerCase() }
}
 
class Telefone{
    constructor(ddd,numero){
        this.ddd = ddd
        this.numero = numero
    }
}
 
class Endereco{
    constructor(estado,cidade,rua,numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
 
    #colocarMaiusculo(texto) { return texto.toUpperCase() }
 
    #colocarMinusculo(texto) { return texto.toLowerCase() }
}
 
class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }
 
    get pegarCnpj() { return this.#cnpj }
 
    #colocarMaiusculo(texto) { return texto.toUpperCase() }
    #colocarMinusculo(texto) { return texto.toLowerCase() }
 
    mostrarDetalhe() {
        return '\nDetalhes: ' +
        '\nRazão Social: ' +  this.razaoSocial +
        '\nNome Fantasia: ' + this.nomeFantasia +
        '\n--------------------' +
        this.mostrarClientes()
    }
    mostrarClientes() {
        let clientesString = ''
        for(let cliente of this.clientes) {
            clientesString += `\nNome: ${cliente.nome}\nEstado: ${cliente.endereco.estado} Cidade: ${cliente.endereco.cidade} Rua: ${cliente.endereco.rua} Número: ${cliente.endereco.numero}` 
        for(let telefone of cliente.telefones) {
            clientesString += `\nDDD: ${telefone.ddd} Telefone: ${telefone.numero}`
        }
        clientesString += '\n';}
        return clientesString
    }
}

export {Empresa, Cliente, Telefone, Endereco}