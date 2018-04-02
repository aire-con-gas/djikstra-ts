import { Edge } from "./Edge";
import { IComparable } from "../interfaces/IComparable";

export class Vertex implements IComparable {
  public name: string;
  public adjacenciesList: Array<Edge> = [];
  public visited: boolean;
  public predecessor: Vertex;
  // distance from the starting Vertex
  public distance: number = Number.MAX_VALUE;

  constructor(name: string) {
    this.name = name;
  }

  public addNeighbor(edge: Edge) {
    this.adjacenciesList.push(edge);
  }

  public compareTo(otherVertex: Vertex): number {
    // return Math.min(this.distance, otherVertex.distance);
    if (this.distance < otherVertex.distance) {
      return 1;
    } else {
      return -1;
    }
  }
}
