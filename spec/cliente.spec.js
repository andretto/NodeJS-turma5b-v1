const Cliente = require('../models/cliente');

test('Testando se o objeto cliente tem a propriedade nome', () => {
    let cliente = new Cliente()
    cliente.nome = "Erick"
    expect(cliente.nome).not.toBeUndefined();
});

test('Testando validação de CPF, válido', () => {
    let cliente = new Cliente()
    cliente.cpf = "418.825.350-90"
    expect(cliente.validarCPF()).toBe(true);
});

test('Testando validação de CPF, inválido', () => {
    let cliente = new Cliente()
    cliente.cpf = "418.825.350-10"
    expect(cliente.validarCPF()).toBe(false);
});

test('Testando cpf undefined', () => {
    let cliente = new Cliente()
    cliente.cpf = undefined
    expect(cliente.validarCPF()).toBe(false);
});

test('Checa se o cpf foi DIGITADO', () => {
    let cliente = new Cliente()
    cliente.cpf = "262.251.718-1"
    expect(cliente.cpf).not.toBeUndefined()
});
