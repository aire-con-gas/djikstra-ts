import { Vertex } from "./models/Vertex";
import { Edge } from "./models/Edge";
import { computePaths, getShortestPathTo } from "./utils/djikstra";

const vertex0 = new Vertex("A");
const vertex1 = new Vertex("B");
const vertex2 = new Vertex("C");

vertex0.addNeighbor(new Edge(1, vertex0, vertex1));
vertex0.addNeighbor(new Edge(1, vertex0, vertex2));
vertex1.addNeighbor(new Edge(1, vertex1, vertex2));

computePaths(vertex0);
console.log(">>>> shortestPath to vertex2", getShortestPathTo(vertex2));
