const Procura = (text) => `https://api.mercadolibre.com/items/${text}`;

const fetchItem = async (text) => {
  try {
    const URL = Procura(text);
    if (text === '') {
      throw new Error('You must provide an url');
    }
    const promise = await fetch(URL);
    const response = await promise.json();
    return response;
  } catch (error) {
    return error;
  }
  };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
