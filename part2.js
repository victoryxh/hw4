'use strict'

// create an array storing menu items
const itemsWithPrice = [{
  name: 'Hotdog',
  price: '3.25',
}, {
  name: 'French fries',
  price: '2.00',
}, {
  name: 'Drinks',
  price: '1.50',
}];

// loop over the array, printing out info about menu items
for (let item of itemsWithPrice) {
  let menuItem = document.createElement('p');
  let node = document.createTextNode(`${item.name}: $${item.price}`);
  menuItem.appendChild(node);
  document.getElementById('menu').appendChild(menuItem);
}

const calculateSubtotal = (hotdog, fries, drinks) => hotdog * 3.25 + fries * 2 +
  drinks * 1.5;

const displayOrder = () => {
  // create an object storing quantities of menu items
  const Quantity = {
    hotdog: Number(document.getElementById('hotdog').value),
    frenchFries: Number(document.getElementById('fries').value),
    drinks: Number(document.getElementById('drink').value),
  };
  let subtotal = calculateSubtotal(Quantity.hotdog, Quantity.frenchFries, Quantity.drinks);
  let total;
  let discount;
  let tax;
  if (subtotal >= 20) {
    total = subtotal * 0.9 * 1.0625;
    discount = subtotal * 0.1;
    tax = subtotal * 0.9 * 0.0625;
  } else {
    total = subtotal * 1.0625;
    discount = 0;
    tax = subtotal * 0.0625;
  }
  alert(`Items ordered: ${Quantity.hotdog} hotdog, ${Quantity.frenchFries} French fries, ${Quantity.drinks} drink.\n
                   subtotal: $${subtotal.toFixed(2)}\n
                   -\n
                   discount: $${discount.toFixed(2)}\n
                   +\n
                   tax: $${tax.toFixed(2)}\n
                   =\n
                   total: $${total.toFixed(2)}\n`);
};

document.getElementById("btn").addEventListener("click", displayOrder);
