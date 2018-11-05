function bfs(rootNode, vertices, edges) {
  rootNode.distance = 0;
  let queue = [rootNode];
  let visitedNodes = [rootNode];
  while (queue.length !== 0) {
    let firstNode = queue.shift();
    let adjacentVertices = findAdjacent(firstNode.name, vertices, edges);
    visitedNodes = visitedNodes.concat(adjacentVertices);
    markDistanceAndPredecessor(firstNode, adjacentVertices);
    queue = queue.concat(adjacentVertices);
  }
  return visitedNodes;
}

function findAdjacent(node, vertices, edges) {
  let nodesEdges = edges.filter(edge => edge.includes(node));
  let adjacentNodes = nodesEdges
    .map(edge => edge.filter(nodeInEdge => nodeInEdge !== node))
    .map(nodeArray => nodeArray[0]);
  return vertices.filter(
    vertex => adjacentNodes.includes(vertex.name) && vertex.distance === null
  );
}

function markDistanceAndPredecessor(vertex, adjacentNodes) {
  adjacentNodes.map(node => {
    node.distance = vertex.distance + 1;
    node.predecessor = vertex;
  });
}
