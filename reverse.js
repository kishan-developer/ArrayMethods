
const numbers = [1,2,3,4,5,6];

// modify the original array
//here print the reverse number with modify the original array
// numbers.reverse();
// console.log(numbers); // [ 6, 5, 4, 3, 2, 1 ]

// 2 nd examples 
// if you want to don't modify your orignal array tha using concat and spred operator like this type

// const res = numbers.concat().reverse();
// console.log(res); // [ 6, 5, 4, 3, 2, 1 ] // create a new array 
// console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ] // print the original array 


// 3rd method
// usign spread operator

// const res = [...numbers].reverse();
// console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ] // original array 
// console.log(res); // [ 6, 5, 4, 3, 2, 1 ] // modify array




// how to reverse a string 

const str = 'coding is fun!';

const res = str.split('').reverse().join('');
console.log(res); //!nuf si gnidoc
console.log(str); // coding is fun!

