// 1. Примитивы:
// числа, строки, булевы значения, null, undefined, NaN.

// 2. Объекты:
// объекты, массивы, функции.
//---------------------------
// - имеют свойста и методы
// - ссылочный тип данных
// - сложная структура

const student = { // student.
    name: "Alex",
    age: 23,
    friends: ["Bob", "Jhon", "Mike"],
}

const student2 = student; // Передаем ссылку на объект student.
student2.name = "Smith";
console.log(student);
console.log(student2);
console.log(student === student2) // true

const student3 = {...student}; // копируем объект student. student и student3 это разные объекты.
student3.name = "Donald";
console.log(student3);
console.log(student === student3) // false

console.log({} === {}); // Объекты не равны!!!

student3.friends.push("Melany");

const studentFullCopy = {...student, friends: [...student.friends]};

// Lodash - библиотека с полезными штуками для Java Script рзаработчика.

function myFunc (state) {
    const fn = () => console.log(state);
    return [state, fn];
}

const result = myFunc (22);
console.log(result);

// let a = result[0];
// let b = result[1];
// let[a, b] = result;
let[state, fn] = myFunc (22);

console.log(state, fn);
fn();

// Деструктуризация почитать.

const students = [
    {
        name: "Bob",
        age: 20,
        isMarried: false,
        scores: 90
    },
    {
        name: "Max",
        age: 21,
        isMarried: false,
        scores: 80
    },
    {
        name: "Jake",
        age: 18,
        isMarried: true,
        scores: 100
    },
    {
        name: "Luke",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

const newArr = students.map(s => s.name);
newArr[0] = "Alex";
console.log(students);
console.log(newArr);

const trueStudents = students.map(s => ({...s, isStudent: true}));
console.log(trueStudents);

const allStudents = trueStudents.map(s => ({...s, scores: s.scores + 10}));
console.log(allStudents);