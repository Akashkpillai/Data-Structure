class Weight {
    constructor() {
        this.edge = {}
    }

    addNode(value){
        this.edge[value] = []
    }
    addEdge(node1,node2,weight){
        this.edge[node1].push({node:node2,weight})
        this.edge[node2].push({node:node1,weight})
    }
}

const graph = new Weight

graph.addNode("A")
graph.addNode("B")
graph.addNode("C")

graph.addEdge('A','B',9)
graph.addEdge('A','C',10)
graph.addEdge('B','C',6)

console.log(graph.edge);
