const calc = require('./calculadora')


describe('Testes para a calculadora', () => {
    test('somar 2 e 2 deve resultar em 4', () => {
       const minhaSoma =  calc.soma(2,2)
    
       expect(minhaSoma).toBe(4)
    })

})