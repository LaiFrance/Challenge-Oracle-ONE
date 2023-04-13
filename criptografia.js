function criptografar(texto){
    // converter para letras minúsculas
    texto = texto.toLowerCase();
    
    // substituir as letras
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    
    // retornar a versão criptografada
    return texto;
}

function descriptografar(texto){
    texto = texto.toLowerCase();
    // substituir as letras
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    
    // retornar a versão original
    return texto;
}