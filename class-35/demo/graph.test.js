const { expect } = require("@jest/globals");
const Graph = require("./graph")

test("should instantiate", () => {
  const graph = new Graph();
  expect(graph).toBeTruthy();
});


test("size should be initially empty", () => {
  const graph = new Graph();
  expect(graph.size()).toEqual(0);
});

test("should add a node/vertex to graph", () => {
  const graph = new Graph();
  const vertex = graph.add("apple");
  expect(vertex.value).toEqual("apple");
});

test("should have size of 1 after adding 1", () => {
  const graph = new Graph();
  graph.add("apple");
  expect(graph.size()).toEqual(1);
});

test("should have size of 2 after adding 2", () => {
  const graph = new Graph();
  graph.add("apple");
  graph.add("banana");
  expect(graph.size()).toEqual(2);
});


test("should return collection of nodes/vertices", () => {
  const graph = new Graph();
  const apple = graph.add("apple");
  const banana = graph.add("banana");
  const collection = graph.getNodes();
  expect(collection).toEqual([apple, banana]); // Gotcha: Relies on ordering
});

