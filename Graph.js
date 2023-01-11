class Graph {
    constructor() {
       this.edges = {};
       this.nodes = [];
    }

    addNode(node) {
       this.nodes.push(node);
       this.edges[node] = [];
    }

    addEdge(node1, node2) {
       this.edges[node1].push(node2);
       this.edges[node2].push(node1);
    }

    addDirectedEdge(node1, node2) {
       this.edges[node1].push(node2);
    }

    display() {
       let graph = " "; 
       this.nodes.forEach(node => {
          graph += node + "->" + this.edges[node].join(", ") + " || ";
       });
       console.log(graph);
    }
     BFS(startnode){
        const queue = []
    
        const visited = new Set()
    
        queue.push(startnode)
        visited.add(startnode)
    
        while(queue.length>0){
            const node = queue.shift()
            console.log(node);
    
            const next = this.edges[node]
            for(const nextNode of next){
                if(!visited.has(nextNode)){
                    queue.push(nextNode)
                    visited.add(nextNode)
                }
            }
        }
    }
}

let g = new Graph();

g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
 
g.addEdge("A", "C");
g.addEdge("A", "B");
g.addDirectedEdge("A", "D");
g.addEdge("D", "E");

g.display();

g.BFS("A")
g.BFS("A")

