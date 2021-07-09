const removeVowels = require('./remove-wowels')

test('hay vocales en la palabra', ()=> {
    const resultado = removeVowels('codewars');
    expect(resultado).toBe('cdwrs');
}) 

test('no hay vocales en la palabra', () => {
    const resultado = removeVowels('ppt');
    expect(resultado).toBe('ppt');

})