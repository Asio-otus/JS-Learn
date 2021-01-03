export const userObj = {
    '0' : 'Dimych',
    '1' : 'Natasha',
    '2' : 'Valera',
    '3' : 'Katya'
}

export type usersType = {
    [ket: string]: {id: number, name: string}
}

export let users: usersType = {
    '101' : { id: 101, name: 'Dimych'},
    '121' : { id: 121, name: 'Natasha'},
    '3232312' : { id: 3232312, name: 'Valera'},
    '1' : { id: 1, name: 'Katya'}
}

// Finding user
let userIWant = users[3232312]; //Easy to find object element buy the key. Less processing.

// Adding user
let newUser = {id: 100500, name: 'Igor'}

// Deleting users
delete users[newUser.id]

// Changing users
users[newUser.id].name = 'Vitya';

users[newUser.id] = newUser;

export const usersArray = [
    { id: 101, name: 'Dimych'},
    { id: 121, name: 'Natasha'},
    { id: 3232312, name: 'Valera'},
    { id: 1, name: 'Katya'}
]

// usersArray.find(u => u.id === 1); To find the element with required id in regular array you need to use the find method. Much more processing.