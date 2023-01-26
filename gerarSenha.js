function gerarSenha(idInputText){//Vai gerar senha com oito Caracteres  
    const values = 'q w e r t y u i o p a s d f g h j k l ç z x c v b n m Q W E R T Y U I O P A S D G F H J K L Ç Z X C V B N M 1 2 3 4 5 6 7 8 9 @ # $ % & *'.split(' ');
    let pass = '';        
    for(let i = 0; i < 8; i++){
        pass += values[parseInt(Math.random() * 68)];
    }        
    document.getElementById(idInputText).value = pass;
}       