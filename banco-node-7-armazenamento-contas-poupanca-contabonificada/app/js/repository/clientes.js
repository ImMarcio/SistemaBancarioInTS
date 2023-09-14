class Clientes {
    constructor() {
        this.clientes = [];
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const alunoARemover = this.pesquisar(cpf);
        if (alunoARemover) {
            const indiceCliente = this.clientes.indexOf(alunoARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        const clientePesquisado = this.clientes.find(cliente => cliente.cpf === cpf);
        return clientePesquisado;
    }
}
