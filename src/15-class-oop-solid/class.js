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
    _name = '' // Private

    constructor(name, site, dob) {
        this._name = name
        this.site = site
        this.dateOfBirth = dob
        this.counter = 0
    }
    // Getter
    get name() {
        return this._name
    }
    // Setter
    set name(value) {
        this._name = value
    }

    hello() {
        this.counter++
        console.log(this.counter)
        console.log(`I am ${this._name} from ${this.site}`)
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
        console.log(`I am ${this._name}, here is my ${this.tech} code: const sum = (a, b) => a + b`)
    }

    hello() {
        super.hello();
        console.log('Go away')
    }
}

const coder1 = new Coder('Dimych coder', 'it-incubator.by', new Date(1988, 1, 2), 'Java Script')
coder1.hello()
coder1.code()

class Hacker extends Coder {
    constructor(a, b, c, d) {
        super();
        this.tech = 'xxx'
        this._name = 'xxx'
        this.site = 'xxx'
    }
    code() {
        console.log(`I'll hack everything`)
    }
    // hello() {
    //     throw new Error('I am Hacker')
    // }
}

const hacker = new Hacker('Dimych coder', 'it-incubator.by', new Date(1988, 1, 2), 'Java Script')
hacker.hello()
hacker.code()

let users2 = [u1, u2, coder1, hacker]

users2.forEach(u => u.hello())