function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.parentNode.removeChild(event);
}
let Subtotal = 0;
const totalPrice = (const1, const2) => {
  const price = document.querySelector('.total-price');
  if (price === null) {
    Subtotal += const1;
  const cart = document.querySelector('.cart');
  const total = createCustomElement('h1', 'total-price', `Subtotal: ${Subtotal}`);
  cart.appendChild(total);
} else if (const1 !== null) {
    Subtotal += const1;
    price.innerText = '';
    price.innerText = `Subtotal: ${Subtotal}`;
  } else {
    Subtotal -= const2;
    price.innerText = '';
    price.innerText = `Subtotal: ${Subtotal}`;
  }
};

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', function () {
    totalPrice(null, salePrice);
    cartItemClickListener(li);
  });
  return li;
}

const cartItem = async (sku) => {
  const ol = document.querySelector('.cart__items');
  const promise = await fetchItem(sku);
  const { title: name } = promise;
  const { base_price: salePrice } = promise;
  const obj = {
    sku,
    name,
    salePrice,
  };
  const createCart = createCartItemElement(obj);
  totalPrice(obj.salePrice);
  return ol.appendChild(createCart);
};

const computador = async () => {
  const items = document.querySelector('.items');
  const promisse = await fetchProducts('computador');
  const PC = promisse.results;
  return PC.forEach((element) => { 
    const { id: sku } = element;
    const { title: name } = element;
    const { thumbnail: image } = element;
   const obj = { 
     sku,
    name,
    image,
  };
 const item = createProductItemElement(obj);
 items.appendChild(item);
 });  
};

const itemButton = () => {
 const button = document.querySelectorAll('.item__add');
return button.forEach((element) => element.addEventListener('click', function () {
  const sku = element.parentElement.firstChild.innerText;
  return cartItem(sku);
}));
};

 window.onload = () => {
   computador()
   .then(itemButton);   
 };
