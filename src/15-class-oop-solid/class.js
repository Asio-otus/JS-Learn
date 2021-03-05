class DeleteUserAction {
    constructor(userId) {
        this.type = 'DELETE-USER'
        this.payload = {
            userId: userId
        }
    }
}

const action3 = new DeleteUserAction('121212')
const action4 = new DeleteUserAction('333000')
console.log(action3)
console.log(action4)

// Another example
class User {
    #name = '' // Private

    constructor(name, site, dob) {
        this.#name = name
        this.site = site
        this.dateOfBirth = dob
        this.counter = 0
    }
    // Getter
    get name() {
        return this.#name
    }
    // Setter
    set name(value) {
        this.#name = value
    }

    hello() {
        this.counter++
        console.log(this.counter)
        console.log(`I am ${this.#name} from ${this.site}`)
    }
}

const u1 = new User('Dimych', 'it-incubator.by', new Date(1988, 1, 2))
const u2 = new User('Artem', 'it-incubator.by', new Date(1989, 10, 12))

u1.name = 'Igor'
// console.log(u1.name)

let users = [u1, u2]

users.forEach( u => u.hello())

class Coder extends User{
    constructor(name, site, dob, tech) {
        super(name, site, dob);
        this.tech = tech
    }

    code() {
        console.log(`I am ${this.name}, here is my ${this.tech} code: const sum = (a, b) => a + b`)
    }

    hello() {
        super.hello();
        console.log('Go away')
    }
}

const coder1 = new Coder('Dimych coder', 'it-incubator.by', new Date(1988, 1, 2), 'Java Script')
coder1.hello()
coder1.code()