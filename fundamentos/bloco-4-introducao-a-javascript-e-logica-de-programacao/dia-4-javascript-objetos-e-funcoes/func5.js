function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let repetir = 0;
    
  for(let index in numeros) {
    let verificaNumero = numeros[index];
    for(let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
            contNumero += 1;
        }
    }
    if (contNumero > contRepetido) {
        contRepetido = contNumero;
        repetir = index;
    }
    contNumero = 0;
  }
    


return numeros[repetir];
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));