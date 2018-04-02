import { Vertex } from "./Vertex";

export class Edge {
  public weight: number;
  public startVertex: Vertex;
  public targetVertex: Vertex;

  constructor(weight: number, startVertex: Vertex, targetVertex: Vertex) {
    this.weight = weight;
    this.startVertex = startVertex;
    this.targetVertex = targetVertex;
  }
}
