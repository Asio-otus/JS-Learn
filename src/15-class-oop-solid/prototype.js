function DeleteUserAction(userId) {
    this.type = 'DELETE-USER'
    this.payload = {
        userId: userId
    }
}

const action3 = new DeleteUserAction('121212')
const action4 = new DeleteUserAction('333000')
console.log(action3)
console.log(action4)

// Another example
function User(name, site, dob) {
    this.name = name
    this.site = site
    this.dateOfBirth = dob
}

User.prototype.hello = function () {
    console.log(`I am ${this.name} from ${this.site}`)
}

const u1 = new User('Dimych', 'it-incubator.by', new Date(1988, 1, 2))
const u2 = new User('Artem', 'it-incubator.by', new Date(1989, 10, 12))

u1.hello()
u2.hello()