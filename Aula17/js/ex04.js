var n1, n2, subtração, multiplicação, divisão
n1=prompt(" insira um valor: ")
n2=prompt(" insira outro valor: ")
subtração=n1-n2
alert("A subtração é "+subtração)
alert(n1+"-"+n2+"="+subtração)
document.write(" o resultado da subtração é "+subtração+"")

n1=prompt(" insira um valor: ")
n2=prompt(" insira outro valor: ")
multiplicação=n1*n2
alert("A multiplicação é "+multiplicação)
alert(n1+"*"+n2+"="+subtração)
document.write(" o resultado da multiplicação é "+multiplicação+"")

n1=prompt(" insira um valor: ")
n2=prompt(" insira outro valor: ")
divisão=n1/n2
alert("A divisão é "+divisão)
alert(n1+"/"+n2+"="+divisão)
document.write(" o resultado da divisão é "+divisão+"")

if(n2==0){
    alert("não existe divisão por zero!")
}
else{
    divisão=n1/n2
    alert(" o resultado da divisão é "+divisão+"")
}