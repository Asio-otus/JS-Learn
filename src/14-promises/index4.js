findUserInDB(1)
    .then(user => user.name)
    .then(name => {
        console.log(name)
        return 100
    })
    .then(number => {
        console.log(number)
        return number + 1
    })
    .then(number => {
        console.log(number)
        return number + 1
    })
    .then(number => {
        console.log(number)
        return number + 1
    })

// Will console.log the promise result
findUserInDB(1)
    .then(console.log)

// Callback hell...
findUserInDB(1)
    .then(user => {
        console.log(user)
        findUserInDB(user.friend)
            .then(user => {
                console.log(user)
                findUserInDB(user.friend)
                    .then(user => {
                        console.log(user)
                    })
            })
    })

// Using return is much more readable than callback hell... Which is obvious
findUserInDB(1)
    .then(user => {
        console.log(user)
        return user
    })
    .then(user => findUserInDB(user.friend))
    .then(friend1 => {
        console.log(friend1)
        return friend1
    })
    .then(friend1 => findUserInDB(friend1.friend))
    .then(friend2 => console.log(friend2))