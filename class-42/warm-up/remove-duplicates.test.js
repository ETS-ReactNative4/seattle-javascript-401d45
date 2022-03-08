'use strict';

const { expect } = require('@jest/globals');
const removeDuplicates = require('./');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

describe('Tesing remove duplicates', () => {
  it('Should remove all duplicates from a linked list', () => {
    const head = new Node(1);
    head.next = new Node(1);
    head.next.next = new Node(3);
    head.next.next.next = new Node(2);
    head.next.next.next.next = new Node(2);

    removeDuplicates(head);
    expect(head.value).toEqual(1);
    expect(head.next.value).toEqual(3);
    expect(head.next.next.value).toEqual(2);
    expect(head.next.next).toEqual(null);
  });

  /**
   * What other tests could we use?
   */
});
