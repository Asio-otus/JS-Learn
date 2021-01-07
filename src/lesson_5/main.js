const array = [0, 34, 23, 345, 999, 123, 45, 567]

//Bubble sort
for (let j = 0; j < array.length; j++) {
    let isSorted = true;
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {
            isSorted = false
            let temp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = temp
            console.log('i is ' + i)
        }
    }
    console.log('j is ' + j)
    console.log(array)
    if (isSorted === true) {
        break
    }
}

// Method sort
let students = ['Nick', 'Alex', 'Donald', 'Bob', '!', '10', 'Борщ', 'alex']
console.log(students.sort())
console.log(students.sort().reverse())
console.log(array.sort())

function sortByIncrease(a, b) {
    if (a <= b) {
        return -10
    } else {
        return 10
    }
}

console.log(array.sort(sortByIncrease))

function sortByIncreaseAlt(a, b) {
    return a - b
}

console.log(array.sort(sortByIncreaseAlt))
console.log(array.sort((a, b) => a - b))

// Отсортировать массив по возрасту и по алфавиту...
let nweStudents = [
    {
        name: "Bob",
        age: 23,
        isMarried: true,
        scores: 85
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

nweStudents.sort((a, b) => a.age - b.age)
console.log(nweStudents)

