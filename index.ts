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


interface Path {
  path: string[];
  distance: number;
}

interface Dijkstra {
  findShortestPath(graph: any, vertex1: string, vertex2: string): Path;
}

const shortestDistanceNode = (distances, visited) => {
  let shortest = null;

  for (let node in distances) {
    let currentIsShortest =
      shortest === null || distances[node] < distances[shortest];
    if (currentIsShortest && !visited.includes(node)) {
      shortest = node;
    }
  }
  return shortest;
};

class MyDijkstra { 

  findShortestPath(graph: any, startNode: string, endNode: string)  { 
    let distances: any[] = [];
    distances[endNode] = "Infinity";
    distances.push(graph[startNode]);

    let parents = { endNode: null };
    for (let child in graph[startNode]) {
      parents[child] = startNode;
    }

    let nodeVisited: any[] = [];
    let nearestNode = shortestDistanceNode(distances, nodeVisited);

    while (nearestNode) {
      let distance = distances[nearestNode];
      let children = graph[nearestNode];
        
      for (let child in children) {
        if (String(child) === String(startNode)) {
          continue;
        } else {
          let newdistance = distance + children[child];
        
          if (!distances[child] || distances[child] > newdistance) {
            distances[child] = newdistance;
            parents[child] = nearestNode;
          }
        }
      }
      nodeVisited.push(nearestNode);
      nearestNode = shortestDistanceNode(distances, nodeVisited);
    }

    let shortestPath = [endNode];
    let parent = parents[endNode];
    while (parent) {
      shortestPath.push(parent);
      parent = parents[parent];
    }
    shortestPath.reverse();

    let results = {
      distance: distances[endNode],
      path: shortestPath,
    };

    return results;
  }
} 

const dj: Dijkstra = new MyDijkstra()

let graph = {
1: [ 4, 2, 3 ],
2: [1, 4, 3 ],
3: [ 1, 2 ],
4: [1, 2],
5: [],
};

console.log(dj.findShortestPath(graph, '4', '1'))