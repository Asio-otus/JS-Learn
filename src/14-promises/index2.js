const resolvedPromise = Promise.resolve(100)

resolvedPromise
    .then(data => console.log(data))
    .catch(error => console.warn(error))

// const rejectedPromise = Promise.reject({message: 'Error'})
//
// rejectedPromise
//     .then(data => console.log(data))
//     .catch(error => console.warn(error))

const usersAPI = {
    getAllUsers() {
        return Promise.resolve([{user: 'Alex'}, {user: 'Bob'}])
    },
    login(login, password) {
        if (login !== 'user login' || password !== '1233432') {
            return Promise.reject({message: 'Password or login are incorrect'})
        } else {
            return Promise.resolve({userName: 'Alex', userId: 1})
        }
    }
}

usersAPI.getAllUsers().then(users => console.log(users))
usersAPI.login('user login', 'asd')
    .then(user => console.log(user.userName + ' ' + user.userId))
    .catch(error => console.log(error.message))