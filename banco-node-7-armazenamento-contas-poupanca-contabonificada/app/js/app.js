let contaController = new ContaController();
let clienteController = new ClienteController();
contaController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
const clienteRepository = new Clientes();
const cliente1 = new Cliente('Marcio', '20221370023');
const cliente2 = new Cliente('Allan', '202213700');
const cliente3 = new Cliente('Joao', '202213');
const cliente4 = new Cliente('Guga', '20223');
clienteRepository.inserir(cliente1);
clienteRepository.inserir(cliente2);
clienteRepository.inserir(cliente3);
clienteRepository.inserir(cliente4);
console.log('Clientes na Lista de Clientes');
const resultadoListar = clienteRepository.listar();
for (let index = 0; index < resultadoListar.length; index++) {
    console.log(resultadoListar[index]);
}
;
clienteRepository.remover('20221370023');
console.log('Cliente removido');
for (let index = 0; index < resultadoListar.length; index++) {
    console.log(resultadoListar[index]);
}
;
console.log('Cliente pesquisado!!');
const clienteJoao = clienteRepository.pesquisar('202213');
console.log(clienteJoao);
