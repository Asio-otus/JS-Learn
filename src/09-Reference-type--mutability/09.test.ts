import {userType} from "./9";

test('reference type test', () => {

    let user: userType = {
        name: 'Dymich',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    function increaseAge(u: userType) {
        u.age++
    }

    increaseAge(user);

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000;

    expect(user.age).toBe(1000)
})

test('array reference test', () => {

    let users = [
        {
            name: 'Dymich',
            age: 32
        },
        {
            name: 'Dymich',
            age: 32
        }
    ]

    let admins = users

    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})

test ('value type test', () => {

    let usersCount = 100

    let adminsCount = usersCount

    adminsCount++

    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)
})

test('reference type test', () => {

    let user: userType = {
        name: 'Dymich',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let user2: userType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Kanary'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Kanary')
})

test('reference array test', () => {

    let user: userType = {
        name: 'Dymich',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let user2: userType = {
        name: 'Natasha',
        age: 30,
        address: {
            title: 'Moscow'
        }
    }

    const users = [user, user2, { name: 'Katya', age: 4, address: {title: 'SPB'}}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {

    const letters = ['c', 'd', 'a', 'z', 'e']

    // passportist(letters)
    passportistClearFunc(letters)

    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
})

function passportist(letters: any) {
    letters.sort()
    console.log(letters)
}

function passportistClearFunc(letters: any) {
    const copy = [...letters].sort()
    console.log(copy)
}