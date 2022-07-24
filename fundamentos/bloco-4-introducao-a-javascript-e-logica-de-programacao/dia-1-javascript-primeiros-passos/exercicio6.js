const piece = 'cavalo';

switch (piece) {

    case 'bispo':
        console.log('Diagonal');
        break;

    case 'torre':
        console.log('frente,lados e tras')
        break;
    
    case 'peao':
        console.log('Frente e diagonal para capturar');
        break;
    
        case 'rainha':
        console.log('qualquer movimento possivel');
        break;
    
        case 'cavalo':
        console.log('apenas anda em L');
        break;
    
        case 'rei':
        console.log('qualquer, porém só anda uma casa');
        break;

}