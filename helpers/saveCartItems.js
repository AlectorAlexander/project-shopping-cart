const saveCartItems = (argument) => JSON.stringify(localStorage.setItem('cartItems', argument));
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
