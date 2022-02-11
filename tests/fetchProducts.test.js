require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('se fetchProducts é uma função', async () => {
   const fnction = await fetchProducts;
   expect(fnction).toBeInstanceOf(Function)
  });
  it('se fetch é chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
   }) 
   it('se o endpoint da função fetch está correta', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
   }) 
   it('se fetchProducts e computadorSearch são iguais', async () => {
    const fnction = await fetchProducts('computador');
    expect(fnction).toEqual(computadorSearch)
   });
   it('se fetchProducts e computadorSearch são iguais', async () => {
    const fnction = await fetchProducts();
    expect(fnction).toEqual(new Error('You must provide an url'))
   });
});
