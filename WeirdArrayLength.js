// Usecase: when we need to strip the array, set the length of the array.

let arr = ["apple", "orange", "banana"];

arr.length = 2;

console.log(arr); //[ 'apple', 'orange' ]

arr.length = 5;

arr[3] = "strawberry";

console.log(arr); // [ 'apple', 'orange', <1 empty item>, 'strawberry', <1 empty item> ]
