// Dijkstra algorithm
// computational complexity O(n^2)

const graph = {
    'start':{
        'A': 6,
        'B': 2
    },
    'A': {
        'finish': 1
    },
    'B': {
        'A': 3,
        'finish': 5
    },
    'finish': {}
}

const costs = {
    'A': 6,
    'B': 2,
    'finish': Infinity
}

const parents = {
    'A': 'start',
    'B': 'start'
}

const findLowestCostNode = (costs: Record<string, number>, proceed: Array<string>) => {
    const nodes = Object.keys(costs)
    let lowestCost = Infinity
    let lowestNode = null
    for (const node of nodes){
        const cost = costs[node]
        if (!proceed.includes(node) && cost < lowestCost){
            lowestCost = cost
            lowestNode = node
        }
    }
    return lowestNode
}

const printPath = (parents: Record<string,string>, endNode: string) => {
    const arrow = ' -> '
    let path = arrow + endNode
    let node = parents[endNode]
    while(node){
        path = node + path
        node = parents[node]
        if (node){
            path = arrow + path
        }
    }
    console.log(path)
}

const printTotalCost = (costs: Record<string, number>, endNode: string) => console.log(`total cost: ${costs[endNode]}`)

const dijkstra = (
    graph: Record<string, Record<string, number>>,
    costs: Record<string, number>,
    parents: Record<string, string>
) => {
    const proceed = []
    let node = findLowestCostNode(costs, proceed)
    while (node){
        const cost = costs[node]
        const neighbours = graph[node]
        for (const neighbour of Object.keys(neighbours)){
            const newCost = cost + neighbours[neighbour]
            if (costs[neighbour] > newCost){
                costs[neighbour] = newCost
                parents[neighbour] = node
            }
        }
        proceed.push(node)
        node = findLowestCostNode(costs, proceed)
    }
    return { costs, parents}
}

const {costs: costs1, parents: parents1} = dijkstra(graph, costs, parents)

printPath(parents1, 'finish')
printTotalCost(costs1, 'finish')



