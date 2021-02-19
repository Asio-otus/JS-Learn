const resolvedPromise = Promise.resolve(100)

resolvedPromise
    .then(data => console.log(data))
    .catch(error => console.warn(error))

const rejectedPromise = Promise.reject({message: 'Error'})


rejectedPromise
    .then(data => console.log(data))
    .catch(error => console.warn(error))