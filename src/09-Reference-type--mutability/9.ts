export type userType = {
    name: string
    age: number
    address: {
        title: string
    }
}

let user: userType = {
    name: 'Dymich',
    age: 32,
    address: {
        title: 'Minsk'
    }
}

function increaseAge(user: userType) {
    user.age++
}