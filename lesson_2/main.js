// http://old.code.mu/tasks/javascript/practice/praktika-na-otrabotku-ciklov-i-funkcij-javascript.html

// 1 //
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 2 //
for (let i = 100; i > 0; i--) {
    console.log(i);
}

// 3 //
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// 4 //
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push('X'); // alt arr[i] = 'X';
}
console.log(arr);

// 5 //
let arr2 = [];
for (let i = 0; i < 10; i++) {
    arr2[i] = i + 1;
}
console.log(arr2);

// 5 alt //
let arr2alt = [];
for (let i = 1; i <= 10; i++) {
    arr2alt.push(i);
}
console.log(arr2alt);

// 6 //
let arr3 = [];
for (let i = 0; i < 10; i++) {
    arr3[i] = parseFloat(Math.random().toFixed(2));
}
console.log(arr3);

// 7 //
let arr4 = [];
for (let i = 0; i < 10; i++) {
    arr4[i] = Math.round(Math.random() * 9) + 1;
}
console.log(arr4);

// 8 //
let randomArr = [-5, 55, 5, 10, 6, 7, -2, 11, 8, -9];
let newArr = [];
for (let i = 0; i < randomArr.length; i++) {
    if (randomArr[i] < 10 && randomArr[i] > 0) {
        newArr.push(randomArr[i]);
    }
}
console.log(newArr);

// 9 //
for (let i = 0; i < randomArr.length; i++) {
    if (randomArr[i] === 5) {
        console.log('There is number 5 in the array')
        break;
    }
}

// 10 //
let sum = 0;
for (let i = 0; i < randomArr.length; i ++) {
    sum += randomArr[i]
}
console.log(sum);

// 11 //
let sum2 = 0;
for (let i = 0; i < randomArr.length; i ++) {
    sum2 += randomArr[i] * randomArr[i];
}
console.log(sum2);

// 12 //
let sum3 = 0;
for (let i = 0; i < randomArr.length; i ++) {
    sum3 += randomArr[i];
}
console.log(sum3 / randomArr.length);

