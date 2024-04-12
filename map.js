
// const numbers = [1,2,3,4,5,6];

// inside the map method passing the double fun as a callback fun
// const doubleNumber = numbers.map(double);

//here your callback fun
// function double(value,index,arr){
    // return value*2;
// }
// console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(typeof doubleNumber); // object
// console.log(doubleNumber); // [ 2, 4, 6, 8, 10, 12 ]





// const numbers = [1,2,3,4,5,6];

// const multipeNumber = numbers.map(multiply);

// function multiply(value,index, arr){
//     return value*index;
// }

// console.log(multipeNumber); // [ 0, 2, 6, 12, 20, 30 ]





// 3 real world example

// const products = [
//     {
//         name:'laptop',
//         price: 1000,
//         count : 5 
//     },
//     {
//         name:'Mobile',
//         price: 20000,
//         count: 2
//     },
//     {
//         name:'keyboard',
//         price: 800,
//         count: 3
//     },
//     {
//         name:'watch',
//         price: 1500,
//         count: 10
//     }
// ]

// const totalproductsValue = products.map(item =>  item.price * item.count);
// console.log(totalproductsValue); // [ 5000, 40000, 2400, 15000 ]


// // count subtotal
// const allproductSubtotal = products.map(item => ({
//     name:item.name,
//     totalValue:item.price*item.count
// }))

// console.log(allproductSubtotal)

// console.clear();







// 4th examples
// convert string to number 

const str = ['1','2','3','4'];
// using Number constructor 
// const number = str.map(item => Number(item));
// console.log(number); // [ 1, 2, 3, 4 ]


// number constructor
const number = str.map(Number);
console.log(number); // [ 1, 2, 3, 4 ]