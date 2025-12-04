
// Write the function camelize(str) that changes dash-separated 
// words like “my-short-string” into camel-cased “myShortString”.

let sampleString = 'my-short-String';

function camelize(str) {
    return str
    .toLowerCase()
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('')
}

// console.log(camelize(sampleString));

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements 
// with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// let sampleArr = [5,6,9,15,1,21,27,13];
// console.log(sampleArr);

// function filterRange(arr, a, b) {
//     return newArr = arr.filter(num => num >= a && num <= b);
// }
// console.log(sampleArr);
// console.log(filterRange(sampleArr, 5, 22));

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it 
// all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// function filterRangeInPlace(arr, a, b) {
//     for (const num of arr) { (num >= a && num <= b) ? num : arr.splice((num.indexOf),1) }
//     return arr;
//     }

// function filterRangeInPlace(arr, a, b) {
//     for (i=0; i<arr.length; i++) { 
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// The function should only modify the array. It should not return anything.

// filterRangeInPlace(sampleArr, 9, 21)
// console.log(sampleArr);

// console.log(sampleArr.sort((a, b) => b-a));

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

let stringArr = ['World', 'Hello', 'Everybodys', 'Greeting', 'First', 'test'];

function copySorted(arr) {
    return arr
    .slice(0)
    .sort();
}

console.log(copySorted(stringArr));
console.log(stringArr);

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance:

let orderedArr = [1, 2, 3, 4, 5];

function shuffle(array) {
    for (let i = array.length - 1 ; i > 0 ; i--) { // i = 5-1 = 4 ; index 4 is '5', last item
        let j = Math.floor(Math.random() * (i + 1)); // random number between 0 and 5, floor makes 0-4 options; lets say 3.9 -> 3
        [array[i], array [j]] = [array[j], array[i]]; // array[5], array[3] = array[3], array[5] ; index 5 and 3 swap.
    }                                                   // i-- ; continues with index 3 '4'
    return array;
}

console.log(shuffle(orderedArr));


//Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

function uniqueArr(arr) {
    let newArr = [];
    for (let entry of arr) {
        if (!newArr.includes(entry)) {
            newArr.push(entry)
        }
    }
    return newArr;
}

console.log(uniqueArr(strings));