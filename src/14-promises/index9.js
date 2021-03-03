// async always return a promise.

const api = {
    async save() {

    },
    async read() {
        return {name: 'some name'}
    }
}

async function run() {
    await api.save()
    console.log('saved')
    let data = await api.read()
    console.log('read: ', data)
}

run()