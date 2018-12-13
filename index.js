function bfs(rootNode, vertices, edges) {
  let queue = [rootNode];
  let exploredNodes = [];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
    adjacentNodes.forEach(n => {
      queue.push(n);
      markDistanceAndPredecessor(currentNode, adjacentNodes);
    });
    exploredNodes.push(currentNode);
  }

  return exploredNodes;
}

function findAdjacent(node, vertices, edges) {
  let nodeEdges = edges.filter(edge => edge.includes(node));

  let adjacentNodes = nodeEdges.map(e => {
    return e.find(n => n !== node);
  });

  return vertices.filter(
    vertex => adjacentNodes.includes(vertex.name) && vertex.distance === null
  );
}

function markDistanceAndPredecessor(node, adjacentNodes) {
  if (node.distance === null) {
    node.distance = 0;
  }

  adjacentNodes.forEach(n => {
    n.distance = node.distance + 1;
    n.predecessor = node;
  });
}
