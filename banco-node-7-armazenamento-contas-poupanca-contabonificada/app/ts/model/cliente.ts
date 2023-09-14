class Cliente {
    private __nome : string
    private __cpf: string
    private conta: Conta

    constructor(nome:string, cpf:string){
        this.__nome = nome;
        this.__cpf = cpf;
    }

    get nome(){
        return this.nome;
    }

    set nome(nomeNovo:string){
        this.__nome = nomeNovo;
    }

    get cpf(){
        return this.__cpf;
    }

    set cpf(cpfNovo){
        this.__cpf = cpfNovo;
    }   

    toString(){
        return `Nome: ${this.__nome} 
        - CPF: ${this.__cpf}`;
    }

}