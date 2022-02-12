const Search = (text) => `https://api.mercadolibre.com/sites/MLB/search?q=${text}`;

const fetchProducts = async (text) => {
      try {
  const URL = Search(text);
  if (text === '' || text === null || text === undefined) {
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
    fetchProducts,
  };
}
