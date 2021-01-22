import {shallowCopyStudent, multiply, addFriends, StudentType, subtract, sum, deepCopyStudent} from './Lesson_7'

let numOne: number
let numTwo: number
let student: StudentType = {
    name: "Bob",
    isStudent: true,
    friends: ["Alex", "Helen"]
}

let stGroup: Array<StudentType> = [
    {
        name: "Bob",
        isStudent: true,
        friends: []
    },
    {
        name: "Alex",
        isStudent: true,
        friends: []
    },
    {
        name: "Helen",
        isStudent: true,
        friends: []
    }
]

beforeEach( () => {
    numOne = 2
    numTwo = 3
})

test('sum of two numbers', () => {
    expect(sum(numOne, numTwo)).toBe(5)
})

test('two numbers multiply', () => {
    expect(multiply(numOne, numTwo)).toBe(6)
})

test('two numbers subtract', () => {
    expect(subtract(numOne, numTwo)).toBe(-1)
})

test('shallow student copy', () => {
    expect(student === shallowCopyStudent(student)).toEqual(false)
    expect(student.friends === shallowCopyStudent(student).friends).toEqual(true)
})

test('deep student copy', () => {
    expect(student === deepCopyStudent(student)).toEqual(false)
    expect(student.friends === deepCopyStudent(student).friends).toEqual(false)
    expect(student.friends[0] === deepCopyStudent(student).friends[0]).toEqual(true)
})

test('every student have friends', () => {
    let studentsWithFriends = addFriends(stGroup)

    for (let i = 0; i < stGroup.length; i++) {
        // Нет в друзьях самого себя
        expect(studentsWithFriends[i].friends.includes(studentsWithFriends[i].name)).toBe(false)
        // По два друга на рыло
        expect(studentsWithFriends[i].friends.length).toBe(stGroup.length - 1)
        // Друзья разные
        expect(studentsWithFriends[i].friends[0] !== studentsWithFriends[i].friends[1]).toEqual(true)
    }
    // Контрольно дотошные
    let studentsRow = stGroup.map( st => st.name)

    // Это все бы в цикл.... Проверка по именам...
    expect(studentsWithFriends[0].friends.includes(studentsRow[1])).toBe(true);
    expect(studentsWithFriends[0].friends.includes(studentsRow[2])).toBe(true);

    expect(studentsWithFriends[1].friends.includes(studentsRow[2])).toBe(true);
    expect(studentsWithFriends[1].friends.includes(studentsRow[0])).toBe(true);

    expect(studentsWithFriends[2].friends.includes(studentsRow[0])).toBe(true);
    expect(studentsWithFriends[2].friends.includes(studentsRow[1])).toBe(true);

})