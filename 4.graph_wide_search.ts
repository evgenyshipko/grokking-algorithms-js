// graph wide search
// computational complexity: O(quantity of ribs + quantity of peaks)

import { strict as assert } from 'node:assert';

const graph: Record<string, string[]> = {
    'you': ['alice', 'bob', 'claire'],
    'bob': ['anuj', 'peggy'],
    'alice': ['peggy'],
    'claire': ['thom', "jonny"],
    'anuj': [],
    'peggy': [],
    'thom': [],
    'jonny': []
}

const isAnswer = (name: string) => name === 'thom'

const wideSearch = (
    startPoint: string,
    graph: Record<string, string[]>,
    isAnswer: (name: string) => boolean
) => {
    const queue = graph[startPoint]

    const usedPoints = [startPoint]

    while (queue?.length > 0){
        const point = queue.shift()
        if (isAnswer(point)){
            return true
        }
        if (!usedPoints.includes(point)){
            usedPoints.push(point)
            queue.push(...graph[point])
        }
    }
    return false
}

assert.equal(wideSearch('you', graph, isAnswer), true)
assert.equal(wideSearch('alice', graph, isAnswer), false)
assert.equal(wideSearch('claire', graph, isAnswer), true)
assert.equal(wideSearch('1111', graph, isAnswer), false)
