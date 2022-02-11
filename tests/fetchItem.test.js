require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('se fetchItem é uma função', async () => {
    const fnction = await fetchItem;
    expect(fnction).toBeInstanceOf(Function)
   });
   it('se fetch é chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
   })
   it('se o endpoint da função fetch está correta', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
   })
   it('se "fetchItem" e "item" são iguais', async () => {
    const fnction = await fetchItem('MLB1615760527')
    expect(fnction).toEqual(item)
   });
   it('se fetchItem retorna um erro com a mensagem: You must provide an url', async () => {
    const fnction = await fetchItem();
    expect(fnction).toEqual(new Error('You must provide an url'))
   });
  
});
