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

