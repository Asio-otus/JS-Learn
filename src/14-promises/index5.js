// let user = await findUserInDB(1)
// console.log(user)
// let friend1 = await findUserInDB(user.friends)
// console.log(friend1)
// let friend2 = await findUserInDB(user.friends.friends)
// console.log(friend2)

async function run() {
    let user = await findUserInDB(1)
    console.log(user.name)
    let friend1 = await findUserInDB(user.friend)
    console.log(friend1.name)
    let friend2 = await findUserInDB(friend1.friend)
    console.log(friend2.name + '' + user.name)
}

run()