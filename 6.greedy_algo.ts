// greedy algo
// Задача о покрытии множества. Вы выпускаете программу на радио и хотите, чтобы она
// транслировалась в определенном кол-ве штатов. Есть список радиостанций с разным покрытием по штатам.
// Требуется транслировать на нужные штаты минимальным кол-вом рабиостанций.

// Для решения задачи есть точный алгоритм, для которого нужно искать все подмножества станций (O(n^2)).
// Но при n = 32 алгоритм будет работать 10 лет, поэтому эту задачу можно решать приблизительно с помощью жадного алгоритма.

enum States {
    MT = 'mt',
    WA = 'wa',
    OR = 'or',
    ID = 'id',
    NV = 'nv',
    UT = 'ut',
    CA = 'ca',
    AZ = 'az'
}

const neededStates = Object.values(States)

const stations = {
    'kone': new Set([States.ID, States.NV, States.UT]),
    'ktwo': new Set([States.WA, States.ID, States.MT]),
    'kthree': new Set([States.OR, States.NV, States.CA]),
    'kfour': new Set([States.NV, States.UT]),
    'kfive': new Set([States.CA, States.AZ])
}

const finalStations = new Set()

const coveredStations = new Set()








