// function higherOrderFunction(callback) {
//     // Perform some operations
//     // Call the callback function
//     callback();
// }
// function callbackFunction() {
//     console.log("Callback function is executed.");
// }
// // Passing the callback function to the higher-order function
// higherOrderFunction(callbackFunction);

let arr= [1,2,3,4,5,6,7,8,9]

let newArr = arr.map( ( val ) => {
    return val * 2;
   
    
} )
console.log(newArr);
