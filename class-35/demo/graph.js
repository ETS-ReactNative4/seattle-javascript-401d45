class Graph {

  constructor() {
    this.adjacencyList = new Map();
  }

  size() {
    return this.adjacencyList.size;
  }

  add(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, [/* neighbor edges go here */]);
    return vertex;
  }

  // addEdge(????)
  // getNeighbors(???)

  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }
}

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  // constructor(????)
}

module.exports = Graph
