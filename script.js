function mensagem(){
    console.log("Bem vindo!");
}

function mostrarNome(nome){
    console.log("Seu nome é", nome);
}

mostrarNome("Mariana");

function about(nome, idade, estilo){
    console.log("meu nome é ${nome} tenho ${idade} anos e escuto ${estilo}");
}

about("Mariana", 18, "r&b"); 

function music(musica,filme){
    console.log("Meu filme favorito é ${filme} e minha música favorita é ${musica}")
}

music("Hotel Caro", "Operação Big Hero");

function conta(x){
    return x * 3
}

console.log(conta(3))
console.log(conta(2))