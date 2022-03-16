function removeVowels(frase) {
    // Implementar código aquí
    // Obligatorio: utilizar una expresión regular y el método de string "replace": https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace

    let resultado = "IMPLEMENTAME!!";
    resultado = resultado.replace(resultado, frase)
    resultado = resultado.replace(/[aeiou]/gi, '');
    return resultado;
}
console.log(removeVowels('codewars')); // --> cdwrs
console.log(removeVowels('holaholaaa')); // -->hlhl
