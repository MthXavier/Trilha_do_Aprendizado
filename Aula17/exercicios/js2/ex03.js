var nome, idade, n1, n2, CPF

nome=prompt("Qual o seu nome?")
idade=parseFloat(prompt(nome+" Digite sua idade: "))
alert("Bem vindo "+nome+"! Você tem "+idade)

if(idade>=18){

    CPF=prompt("Insira seu CPF")
    alert("Seu CPF "+CPF)
}
else{
    alert("menor de idade")
}
