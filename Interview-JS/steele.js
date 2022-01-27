/*
1. Primitive Data types:
Number, String, Boolean, Null, Undefined
BigInt,

2. Unitary Operator
counter = counter + 1
conter++

> string.length
> typeof (7)

3. Srings are immutable in JS

4. String Methods :

string.toUpperCase()
string.toLowerCase()
string.trim() - removes whitespaces
string.indexOf(argument)
string.slice(arg)
string.replace(old,new)

5. Null & undefined

null : must be explicitely defined
> let isUserLoggedIn = null

undefined : Variable that don't have assigned value
> letisLoggedIn
<- undefined

6. typeof is an operator, doesn't need bracket

7. parseInt(arg) -> return int

8. parseFloat(arg) -> return float

9. double equals (==)

> checks for equality of value only not type.
> coherce for both values to same type

10. strict equality operator (===)

> checks for both value and type

11. Falsy values:
false, 0, "", null, undefined, NaN
Everything else is truthy

12. Ternaty operator

> condition ? expIfTrue : expIfFalse


13. 
> Array = [] 
> newArray(arg)

update a value
> newArray[idx] = value
add at last place
> newArray[Array.length] = value

Array methods -
Array.push() - add to end -> return newLength of array
Array.pop() - remove from end -> return the end el
Array.shift() - remove from start ->bahar shift kara de 
Array.unshift() - add to start -> return the first el

concat - merge arrays
arr1.concat(arr2) -> returns new array, don't mutate
includes - look for a value
indexOf - just like str.indexOf
join - creates a str form array
reverse - reverses an array -> mutates original array
slice - copy portion of array
splice - remove/replace ele
sort - sorts an array -> returns sorted array

14. for(let item of items){}
> Object.keys(obj) -> return list of keys
> Object.values(obj) -> return list of values

15. for (let key in obje){}
-> iterate key in an object

16. function funcName(){}



// a = 1;
// console.log(a)
// var a;

// hoistedVariable = 3;
// console.log(hoistedVariable);
// var hoistedVariable;

// function doSomething(){
//   x = 33
//   console.log(x)
//   var x
// }
// doSomething()

// variable intialization are not hoisted
// only variable declaration is hoisted

// var x ;
// console.log(x)
// x= 23

// To avoid hoisting, use strict Mode















*/
