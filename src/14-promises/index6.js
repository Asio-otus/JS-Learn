function getNumber() {
    return Math.floor(Math.random() * 10 + 1)
}

getNumber().then(n => console.log(n))