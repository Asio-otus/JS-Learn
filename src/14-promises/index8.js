findUserInDBWithError(1)
    .then(user => {
        console.log(user.name)
        return user
    })
    .then(friend => findUserInDB(friend.friend))
    .catch(error => {
        return {id: null, name: 'Bot', friend: 3}
    })
    .then(friend1 => {
        console.log(friend1.name)
        return friend1
    })
    .then(friend1 => findUserInDB(friend1.friend))
    .then(friend2 => console.log(friend2.name))
    .catch(error => alert(error))

async function run() {
    try {
        let user = await findUserInDBWithError(1)
        console.log(user.name)
        let friend1
        try {
            friend1 = await findUserInDBWithError(user.friend)
        } catch(error) {
            friend1 = {id: null, name: 'Bot', friend: 3}
        }
        console.log(friend1.name)
        let friend2 = await findUserInDBWithError(friend1.friend)
        console.log(friend2.name)
    } catch(error) {
        alert(error)
    }
}

run()