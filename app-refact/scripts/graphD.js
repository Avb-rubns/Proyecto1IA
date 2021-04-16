import GraphVertex from "../data-structures/graph/GraphVertex";
import GraphEdge from "../data-structures/graph/GraphEdge";
import Graph from "../data-structures/graph/Graph";

export class GraphD {
  createG() {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");
    const vertexD = new GraphVertex("D");

    const edgeAB = new GraphEdge(vertexA, vertexB, 5.3);
    const edgeAC = new GraphEdge(vertexA, vertexC, 7.2);
    const edgeAD = new GraphEdge(vertexA, vertexD, 3.1);
    const edgeBC = new GraphEdge(vertexB, vertexC, 11);
    const edgeBD = new GraphEdge(vertexB, vertexD, 6.6);
    const edgeCD = new GraphEdge(vertexC, vertexD, 15.2);

    const graph = new Graph(false);
    graph
      .addEdge(edgeAB)
      .addEdge(edgeAC)
      .addEdge(edgeAD)
      .addEdge(edgeBC)
      .addEdge(edgeBD)
      .addEdge(edgeCD);

    return graph;
  }
}
