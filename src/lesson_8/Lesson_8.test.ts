import {
    checkType, getBanknoteList, getSum,
    getTriangleType,
    isEvenSumGreater,
    isEvenSumGreaterForEach,
    isEvenSumGreaterReduce,
    sum
} from './Lesson_8'

test('sum of numbers', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15)
})

test('get type of numbers', () => {
    expect(checkType(1, 2, 3, 4, 5)).toBe(true)
})

test('triangle type', () => {
    expect(getTriangleType(3, 3, 3)).toBe('10')
    expect(getTriangleType(3, 2, 3)).toBe('01')
    expect(getTriangleType(3, 4, 5)).toBe('11')
    expect(getTriangleType(1, 2, 20)).toBe('00')
})

test('is even sum greater', () => {
    expect(isEvenSumGreater([1, 2, 3, 40, 5])).toBe(false)
    expect(isEvenSumGreater([100, 2, 300, 4, 500])).toBe(true)
})

test('is even sum greater with reduce', () => {
    expect(isEvenSumGreaterReduce([1, 2, 3, 40, 5])).toBe(false)
    expect(isEvenSumGreaterReduce([100, 2, 300, 4, 500])).toBe(true)
})

test('is even sum greater with forEach', () => {
    expect(isEvenSumGreaterForEach([1, 2, 3, 40, 5])).toBe(false)
    expect(isEvenSumGreaterForEach([100, 2, 300, 4, 500])).toBe(true)
})

test('get sum', () => {
    expect(getSum(2000)).toBe(2)
    expect(getSum(1111)).toBe(4)
    expect(getSum(1212)).toBe(6)
})

test("get banknote list", ()=> {
    const result1500 = getBanknoteList(1500)
    const result23 = getBanknoteList(23)
    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)

})
