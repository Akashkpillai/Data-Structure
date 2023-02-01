class Graph {
    constructor(){
        this.edge = {}
        this.node = []
    }
    addnode(node){
        this.node.push(node)
        this.edge[node] = [] 
    }
    addEdge(node1,node2,weight){
        this.edge[node1].push({node2,weight})
        this.edge[node2].push({node1,weight})
    }
}

const graph = new Graph

graph.addnode("A")
graph.addnode("B")
graph.addnode("C")


graph.addEdge("A","B",8)
graph.addEdge("A","C",9)
graph.addEdge("C","B",7)

console.log(graph.edge);