class Graph {
    constructor(){
        this.edge = {}
        this.node = []
    }
    adjecency(node1,node2){
        this.edge[node1].push(node2)
        this.edge[node2].push(node1)
    }

    
}