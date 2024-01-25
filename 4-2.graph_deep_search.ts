// deep wide search
// computational complexity: O(quantity of ribs + quantity of peaks)
// memory complexity: O(quantity of peaks)

// обходим каджую ветвь в глубину. в поиске в ширишу использовали очередь, тут используем стек

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

const deepSearch = (
    startPoint: string,
    graph: Record<string, string[]>,
    isAnswer: (name: string) => boolean
) => {
    const stack = graph[startPoint]

    const usedPoints = [startPoint]

    while (stack?.length > 0){
        const point = stack.pop()
        if (isAnswer(point)){
            return true
        }
        if (!usedPoints.includes(point)){
            usedPoints.push(point)
            stack.push(...graph[point])
        }
    }
    return false
}

assert.equal(deepSearch('you', graph, isAnswer), true)
assert.equal(deepSearch('alice', graph, isAnswer), false)
assert.equal(deepSearch('claire', graph, isAnswer), true)
assert.equal(deepSearch('1111', graph, isAnswer), false)
