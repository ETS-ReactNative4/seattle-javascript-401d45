import { purchaseItem } from './';
import inventory from './inventory.json';

describe('testing our vernding machine features', () => {
  test('should be able to purchase an item from inventory', () => {
    let result = purchaseItem('snickers', [0,0,0,4,0], inventory);

    expect(result).toEqual('snickers');
    expect(inventory['snickers'][0]).toEqual(4);
  });

  test('Shuold return null for no inventory', () => {
    let result = purchaseItem('pork rinds', [0,2,0,0,0], inventory);

    expect(result).toEqual(null);
  });

  test('Should return null if not enough money', () => {
    let result = purchaseItem('snickers', [0,0,0,3,0], inventory);

    expect(result).toEqual(null);
    expect(inventory['snickers'][0]).toEqual(4); //  this shuold be 4 since we just purchased a snickers it our first test.
  });
});
