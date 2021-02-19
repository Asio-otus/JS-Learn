const promise1 = axios.get('https://google.com')
promise1.then((data) => {
    console.log(data)
})

const promise2 = findUserInDB(1)
// Pending
console.log(promise2)
promise2
    .then((user) => {
        // Resolved
        console.log(promise2)
    })
    .catch((error) => {
        // Error
        console.log(promise2)
    })
    // .finally(() => {
    //     // Finally
    //     console.log(promise2)
    // })

const otherPromise = Promise.all([promise1, promise2])
const otherPromise2 = Promise.allSettled([promise1, promise2])

otherPromise
    .then((result) => {
        console.log('all promises have been resolved')
        const dataFromGoogle = result[0]
        const dataFromDB = result[1]
        console.log(dataFromGoogle.data.vacancies)
        console.log(dataFromDB.name)

    })
    .catch(() => {
        console.log('Initialization have failed')
    })

otherPromise2
    .then((result) => {
        console.log('Some promises have been resolved')
        const dataFromGoogle = result[0].status === 'fulfilled'
            ? result[0].value
            : {data: {vacancies: null}}
        const dataFromDB = result[1].status === 'fulfilled'
            ? result[1].value
            : {name: result[1].value}

        console.log(dataFromGoogle.data.vacancies)
        console.log(dataFromDB.name)
    })

// findUserInDB(1).then((user) => console.log(user))
// axios.get('https://social-network.samuraijs.com/api/1.0/users').then((data) => console.log(data))