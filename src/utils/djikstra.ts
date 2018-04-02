import { Vertex } from "../models/Vertex";
import { Edge } from "../models/Edge";
import { PriorityQueue } from "../models/PriorityQueue";

const computePaths = (sourceVertex: Vertex) => {
  sourceVertex.distance = 0;

  const queue = new PriorityQueue();
  queue.enqueue(sourceVertex);

  while (queue.size() > 0) {
    const currentVertex = queue.dequeue();
    currentVertex.adjacenciesList.forEach(edge => {
      const v = edge.targetVertex;
      const newDistance = currentVertex.distance + edge.weight;
      if (newDistance < v.distance) {
        queue.dequeue();
        v.distance = newDistance;
        v.predecessor = currentVertex;
        queue.enqueue(v);
      }
    });
  }
};

const getShortestPathTo = (targetVertex: Vertex) => {
  const shortestPathToTarget = [];
  for (
    let vertex: Vertex = targetVertex;
    vertex !== null;
    vertex = vertex.predecessor
  ) {
    shortestPathToTarget.push(vertex);
  }
  return shortestPathToTarget;
};

export { computePaths, getShortestPathTo };
