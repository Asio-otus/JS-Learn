//
const deleteUser = (userId) => {
    return {
        type: 'DELETE-USER',
        payload: {
            userId: userId
        }
    }
}

const action1 = deleteUser('123123')
const action2 = deleteUser('444444')

console.log(action1)
console.log(action2)

// Another example
function commonHello() {
    console.log(`I am ${this.name} from ${this.site}`)
}

const userFabric = (name) => {
    return {
        name: name,
        site: 'it-incubator.by',
        dateOfBirth: new Date(1988, 1, 2),
        hello: commonHello
    }
}

commonHello() // 'this' inside of this function will be bound to global object 'window', which doesn't contain a name and site properties.

const u1 = userFabric('Dimych')
const u2 = userFabric('Artem')

u1.hello()
u1.hello()