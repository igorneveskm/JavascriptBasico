    saldo = 1000
    function  dadosacesso(){
        numcartao = prompt("Digite o número do cartão:")
        senha = prompt("Digite a senha:")
        saldo = prompt("Digite seu saldo:")
    }

    function saque(valor){
        saldo = saldo - valor
        return saldo

    }