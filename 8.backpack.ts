// backpack task
// You have a backpack with limited load capacity. Also you have list of items, each item has cost and weight.
// Find a costest set of items which can be added into backpack.

class Item {
    name: string;
    cost: number;
    weight: number;

    constructor(item: Item) {
        this.name = item.name
        this.cost = item.cost
        this.weight = item.weight
    }

    toString(){
        return `${this.name} cost: ${this.cost}, weight: ${this.weight}`
    }
}

const NULL_ITEM = new Item({
    name: 'NULL ITEM',
    cost: 0,
    weight: 0
})

const ITEMS: Record<string, Item> = {
    'tv': new Item({
        name: 'tv',
        cost: 3000,
        weight: 4
    }),
    'notebook': new Item({
        name: 'notebook',
        cost: 2000,
        weight: 3
    }),
    'guitar': new Item({
        name: 'guitar',
        cost: 1500,
        weight: 1
    }),
    'iphone': new Item({
        name: 'iphone',
        cost: 2000,
        weight: 1
    }),
}

const BACKPACK_MAX_LOAD = 4

const INDEXES = {
    0: 'guitar',
    1: 'tv',
    2: 'notebook',
    3: 'iphone'
}


const table: Item[][][] = [
    //1,2,3,4 - weights
    [[], [], [], []], // guitar
    [[], [], [], []], // tv
    [[], [], [], []], // notebook
    [[], [], [], []]  // iphone
]

const getItemsCost = (items: Item[]) => items.reduce((acc, item) => acc + item.cost, 0)

for (let i = 0; i < Object.keys(ITEMS).length; i++) {
    for (let j = 0; j < BACKPACK_MAX_LOAD; j++) {
        const item = ITEMS[INDEXES[i]]

        if (item.weight > j + 1 && i === 0){
            table[i][j] = [NULL_ITEM]
            continue
        } else if (i === 0){
            table[i][j] = [item]
            continue
        }

        const previousMaxItems = i > 0 ? table[i-1][j] : []
        const previousMax = getItemsCost(previousMaxItems)

        const previousMaxForRestWeightItems = i > 0 && j >= item.weight ? table[i-1][j  - item.weight] : []
        const currentMax = item.cost + getItemsCost(previousMaxForRestWeightItems)

        console.log('i: ',i,' j: ', j, ' previousMax: ',previousMax, ' currentMax: ',currentMax)

        if (previousMax > currentMax || item.weight > j + 1){
            table[i][j] = previousMaxItems
        }else{
            table[i][j] = [item, ...previousMaxForRestWeightItems]
        }
    }
}

console.log(table.map((line) => console.log(line)))

console.log(`TOTAL ITEMS: ${table[Object.keys(ITEMS).length - 1][BACKPACK_MAX_LOAD - 1]}`)