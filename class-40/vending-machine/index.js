'use strict';

`
You are tasked with creating a Vending Machine
that can lookup items sold and compute whether
or not a customer has provided enough coins to
purchase a selected item.

The vending machine has 2 important features.
Storing information about the products sold
by the **Vending Machine**, this includes
information about the current **inventory**
and the **price** .  And computing the total
amount of money provided by a customer given in
coin based increments (1 / 5 / 10 / 25 / 50).
How would you implement these
**Vending Machine** features?
`;

import inventory from './inventory.json';

export function purchaseItem(itemName, coins, _inventory) {
  let itemData = _inventory[itemName] || inventory[itemName]; // handling dependency injection for testing
  let itemCount = itemData[0];
  if (itemCount < 1) {
    return null;
  }

  let priceOfItem = itemData[1];
  let sumOfCoins = sumCoins(coins);
  if (sumOfCoins >= priceOfItem) {
    reduceInventory(itemData);
    return itemName;
  }

  return null;
}

const sumCoins = coins => {
  let denominations = [1, 5, 10, 25, 50];
  let sum = 0;
  for (let idx in coins) {
    let coinCount = coins[idx];
    let denomination = denominations[idx];
    sum += coinCount * denomination;
  }

  return sum;
};

const reduceInventory = itemData => {
  itemData[0] -= 1;
};
