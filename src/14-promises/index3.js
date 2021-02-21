// const promise2 = findUserInDB(1)
//
// const promise2_2 = promise2.then(user => {
//     return user.name
// })
//
// promise2_2.then(name => console.log(name))
//
// // The same thing as above
// findUserInDB(1)
//     .then(user => user.name)
//     .then(name => console.log(name))
//
// axios.get('http://google.com')
//     .then(res => res.data)
//     .then(data => console.log(data))

const getVacanciesCountFromGoogle = () => {
    return axios.get('http://google.com')
        .then(res => res.data)
        .then(data => data.vacancies)
}

getVacanciesCountFromGoogle()
    .then(count => console.log(count))