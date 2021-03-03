// Count to 3. One second each count... This is not the way to do things. Just an example to compare with better solution.

// setTimeout(() => {
//     console.log('1')
//     setTimeout(() => {
//         console.log('2')
//         setTimeout(() => {
//             console.log('3')
//         }, 1000)
//     }, 1000)
// }, 1000)

// This is a better practice if you want to code the same logic as in the code above.

const wait = (ms) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

async function run() {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}

run()