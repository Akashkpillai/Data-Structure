function BFS(graph,startnode){
    const queue = []

    const visited = new Set()

    queue.push(startnode)
    visited.add(startnode)

    while(queue.length>0){
        const node = queue.shift()
        console.log(node);

        const next = graph[node]
        for(const nextNode of next){
            if(!visited.has(nextNode)){
                queue.push(nextNode)
                visited.add(nextNode)
            }
        }
    }
}


const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
  };

  BFS(graph,"C")