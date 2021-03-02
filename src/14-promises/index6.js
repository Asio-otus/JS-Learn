findUserInDB(1).then( user => {
    console.log(user.name)
})

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10 + 1)
}

function getNumber() {
    return Promise.resolve(generateRandomNumber())
}
getNumber().then(n => console.log(n)) // When we put then the promise resolve becomes a micro task and will be added to the stack after the sync code is executed
console.log('sync after then') // Will show before the console.log result above which is a micro task.

function getNumber2() {
    return new Promise((resolve, reject) => {
        resolve(generateRandomNumber())
    })
}

getNumber().then(n => console.log(n))
getNumber().then(n => console.log(n))

const repo = {
    save(data) {
        try {
            localStorage.setItem('some-key', JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some-key', JSON.stringify(data))
                resolve()
            } catch (error) {
                reject(error)
            }
        })
        return promise
    },
    readAsync() {
      return new Promise ((resolve, reject) => {
          const data = localStorage.getItem('some-key')
          if(!data) {
              resolve(null)
          } else {
             resolve(JSON.parse(data))
          }
      })
    }
}

// repo.save({name: 'IT-KAMASUTRA'})
// console.log('Saved')

const run = async () => {
    await repo.saveAsync({name: 'IT-KAMASUTRA'})
    console.log('SAVED')

    const data = await repo.readAsync()
    console.log(data)
}

run()

