
// Write a function that returns the sum of two numbers.
// For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.

function mysum(param1,param2){
    return (param1+param2);
}

document.write(mysum(1,2));

// Write a function that returns the sum of all numbers regardless of # of params.
// hints
//     Arithmetic Operators
//     Rest Operators
//     forEach()

function AllSum(...params){
    let total =0;
    params.forEach(parElem=>{
        total +=parElem;
    })
    return total;
}
document.write(AllSum(5,565,8,5,6,5));