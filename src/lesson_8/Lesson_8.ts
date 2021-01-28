export function sum(...numbers: Array<number>) {
    return numbers.reduce((acc, item) => acc + item)
}

export function checkType(...numbers: Array<number>) {
    return Array.isArray(numbers)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number) {
    if (c < a + b) {
        if (a === b && b === c && c === a) {
            return '10'
        } else if (a === b || a === c || c === b) {
            return '01'
        } else {
            return '11'
        }
    }
    return '00'
}

// 3. Функция принимает isEvenSumGreater параметром массив чисел.
// Если сумма элементов массива с чётным индексом больше суммы элементов массива с нечётными индексами,
// то функция возвращает true. В противном случае - false.

export function isEvenSumGreater(arr: Array<number>) {
    let sumOdd = 0
    let sumEven = 0
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }
    return sumEven > sumOdd
}

export function isEvenSumGreaterReduce(arr: Array<number>) {
    let sumEven = arr.reduce((sum, num, index) => index % 2 === 0 ? sum + num : sum)
    let sumOdd = arr.reduce((sum, num, index) => index % 2 !== 0 ? sum + num : sum)
    return sumEven > sumOdd
}

export function isEvenSumGreaterForEach(arr: Array<number>) {
    let sumOdd = 0
    let sumEven = 0
    arr.forEach((num, index) => {
            if (index % 2 === 0) {
                sumEven += num
            } else {
                sumOdd += num
            }
        }
    )
    return sumEven > sumOdd
}

// 4. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(num: number) {
    let sumArr = num.toString().split('').map(Number);
    return (sumArr.reduce((acc, item) => acc + item, 0))
}
// num % 10

// 5. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

export function getBanknoteList(num: number): Array<number> {
    return [1]
}