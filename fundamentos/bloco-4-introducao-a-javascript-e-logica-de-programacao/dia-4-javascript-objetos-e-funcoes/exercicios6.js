let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  for (let key in leitor) {
    console.log('o livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + 'se chama ' + leitor.livrosFavoritos[0].titulo  );

  }