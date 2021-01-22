export function sum (a: number, b: number) {
    return a + b
}

export function multiply (a: number, b: number) {
    return a * b
}

export function subtract (a: number, b: number) {
    return a - b
}

export type StudentType = {
    name: string
    isStudent: boolean
    friends: Array<string>
}

export function shallowCopyStudent(st: StudentType) {
    return {...st}
}

export function deepCopyStudent(st: StudentType) {
    return {...st, friends: [...st.friends]}
}

export function addFriends (group: Array<StudentType>) {
    return group.map(st => ({...st, friends: group.map(st => st.name).filter(name => name !== st.name)}))
}