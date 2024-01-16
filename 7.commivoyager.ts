// задача коммивояджера
// нужно обойти все города из графа, затратив на это минимальное расстояние

const graph1 = {
    A: {
        B: 44,
        D: 32,
        C: 46,
        F: 37
    },
    B:{
        A: 44,
        E: 30,
        C: 45
    },
    C: {
        A: 46,
        B: 45,
        F: 15
    },
    D: {
        A: 32,
        E: 17,
        F: 22,
    },
    E: {
        B: 30,
        D: 17,
        F: 35
    },
    F: {
        C: 15,
        D: 22,
        A: 37,
        E: 35
    }
}

type Nodes = keyof typeof graph1
const getLowestPathNode = (obj: Record<string, number>, usedNodes: Nodes[]) => {
    let lowest = Infinity
    let lowestNode = null
    for (const [node, length] of Object.entries(obj)){
            if (length < lowest && !usedNodes.includes(node as Nodes)){
                lowestNode = node
                lowest = length
            }
    }
    return lowestNode
}
const getPath = (graph: Record<Nodes, Record<string, number>>) => {

    const nodes: Nodes[] = Object.keys(graph) as Nodes[]
    const startPoint = nodes[Math.floor(Math.random() * nodes.length)]

    console.log('startPoint',startPoint)

    let distance = 0
    const path: Nodes[] = [startPoint]
    let currentNode = startPoint

    while (path.length !== nodes.length){
        currentNode = getLowestPathNode(graph[currentNode], path)
        if (!currentNode){
            break;
        }

        distance += graph[path[path.length - 1]][currentNode]
        path.push(currentNode)
    }
    return {path, distance}
}

console.log(getPath(graph1))
console.log(getPath(graph1))
console.log(getPath(graph1))
console.log(getPath(graph1))
console.log(getPath(graph1))
console.log(getPath(graph1))
console.log(getPath(graph1))
console.log(getPath(graph1))
console.log(getPath(graph1))
console.log(getPath(graph1))
