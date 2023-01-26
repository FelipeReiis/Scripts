function copiar(idInputText){
        let text = document.getElementById(idInputText);
        text.select();
        navigator.clipboard.writeText(text.value);
    }