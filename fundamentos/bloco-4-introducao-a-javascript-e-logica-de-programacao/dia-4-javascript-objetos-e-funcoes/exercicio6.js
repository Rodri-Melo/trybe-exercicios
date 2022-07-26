function natural(numero) {
    n = 5;
    resultado = 0;
    
    for (index = 1; index <= numero; index += 1) {
        resultado = index + resultado;
    }
    if (n < 1){
        console.log('Numero não natural');
    } 


return resultado;
}
console.log(natural(5));