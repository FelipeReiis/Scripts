function checked (idCheckBox, idInputText){ // apresentar um input, somente quando um check box for selecionado
    let checkBox = document.getElementById(idCheckBox);
    let inputText = document.getElementById(idInputText);    
    inputText.style.display = 'none';
    checkBox.addEventListener('click', (()=>{
        if (!checkBox.checked){
            inputText.style.display = 'none';
        }else{
            inputText.style.display = 'block';
        }
    }))        
} 