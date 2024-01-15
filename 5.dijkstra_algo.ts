// Dijkstra algorithm
// computational complexity O(n^2)
// memory complexity O(n)

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
    const nodes = Object.keys(costs) // избавиться от выделения памяти на маасив ключей
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
    let node = findLowestCostNode(costs, proceed) // find node with lowes cost
    while (node){
        const cost = costs[node] // path cost of moving to the node
        const neighbours = graph[node] // neighbours of the node
        for (const neighbour of Object.keys(neighbours)){
            const newCost = cost + neighbours[neighbour] // path cost of moving to neighbour through the node
            if (costs[neighbour] > newCost){
                costs[neighbour] = newCost // if founded cheaper path refresh costs and parents
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



