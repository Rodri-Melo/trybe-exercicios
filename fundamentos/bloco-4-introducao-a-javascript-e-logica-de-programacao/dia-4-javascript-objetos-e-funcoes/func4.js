function nomes (caracteres) {
    let maior = caracteres[0];
    for(let index in caracteres) {
        if(maior.length < caracteres[index].length) {
            maior = caracteres[index];
        }
    }
return maior;
}

console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));