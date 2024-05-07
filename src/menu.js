import Americano from './americano.png';
import Cappuccino from './cappuccino.png';
import Espresso from './espresso.png';
import Latte from './latte.png';
import Macchiato from './macchiato.png';
import Mocha from './mocha.png';

export default function createMenu() {
  const menuSection = document.getElementById('menuSection');

  menuSection.innerHTML = '';

  let header = document.createElement("H1");
  header.innerHTML = "Menu";
  menuSection.appendChild(header);

  const container = document.createElement('div');
  container.classList.add('container');


  const coffeeDrinks = [
    { name: 'Espresso', image: Espresso, description: 'A shot of concentrated coffee.', price: 2.50 },
    { name: 'Cappuccino', image: Cappuccino, description: 'Espresso with steamed milk and foam.', price: 3.50 },
    { name: 'Latte', image: Latte, description: 'Espresso with steamed milk.', price: 3.00 },
    { name: 'Mocha', image: Mocha, description: 'Espresso with chocolate and steamed milk.', price: 4.00 },
    { name: 'Americano', image: Americano, description: 'Espresso with hot water.', price: 2.75 },
    { name: 'Macchiato', image: Macchiato, description: 'Espresso with a dollop of steamed milk foam.', price: 3.25 },
  ];

  function createCoffeeCard(drink) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = drink.image;
    img.alt = drink.name;
    card.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = drink.name;
    card.appendChild(h2);

    const p1 = document.createElement('p');
    p1.textContent = drink.description;
    card.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = `Price: $${drink.price.toFixed(2)}`;
    card.appendChild(p2);

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.onclick = function () {
      addToCart(drink.name, drink.price);
    };
    card.appendChild(button);

    return card;
  }

  function addToCart(itemName, price) {
    alert(`Added ${itemName} to cart. Total: $${price.toFixed(2)}`);
  }

  coffeeDrinks.forEach(drink => {
    const card = createCoffeeCard(drink);
    container.appendChild(card);
  });
  menuSection.appendChild(container);
}
