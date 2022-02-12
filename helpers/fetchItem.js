const Procura = (text) => `https://api.mercadolibre.com/items/${text}`;

const fetchItem = async (text) => {
  try {
    const URL = Procura(text);
    if (text === '' || text === null || text === undefined) {
      throw new Error('You must provide an url');
    }
    const promise = await fetch(URL);
    const response = await promise.json();
    return response;
  } catch (Error) {
    return Error;
  }
  };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
