interface WeightedGraph {
  addVertex(key: string): void;
  addEdge(vertex1: string, vertex2: string, weight: number): void;
}

interface NewVertex {
  [key: string]: any;
}

class Graph { 
    numberOfNodes: number
    adjacentList: NewVertex

  constructor() { 
    this.numberOfNodes = 0;
    this.adjacentList = {}; 
  } 
  addVertex(node: string)  { 
    this.adjacentList[node] = []; 
    this.numberOfNodes++;
  } 
  addEdge(vertex1: string, vertex2: string, weight: number) { 
    this.adjacentList[vertex1].push({vertex: vertex2, weight}); 
    this.adjacentList[vertex2].push({vertex: vertex1, weight}); 
  } 
} 

const myGraph: WeightedGraph = new Graph();

const vertices = ['1', '2', '3', '4', '5']
vertices.forEach(vertice => myGraph.addVertex(vertice))

myGraph.addEdge('1', '4', 3); 
myGraph.addEdge('1', '2', 5); 
myGraph.addEdge('1', '3', 4); 
myGraph.addEdge('2', '4', 6); 
myGraph.addEdge('2', '3', 5); 

console.log(myGraph)

interface Path {
  path: string[];
  distance: number;
}

interface Dijkstra {
  findShortestPath(vertex1: NewVertex, vertex2: NewVertex): Path;
  findAllShortestPaths(vertex: string): Record<string, Path>;
}

class MyDijkstra { 
  findShortestPath(vertex1: NewVertex, vertex2: NewVertex)  { 
    return {
      path: ['1', '2'],
      distance: 2
    }
  } 
  findAllShortestPaths(vertex: string) { 
    return ['PATH']
  } 
} 