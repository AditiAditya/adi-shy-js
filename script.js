// // QUES => Make an array of 5 elements then remove the last element of array.

// var city = ["Indore" , "Surat" , "Navi Mumbai" , "Visakhapatnam" , "Bhopal"];
// city.pop( )
// console.log(city)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// QUES=> Make the array of 10 elements and remove the first element of array.

// var city = ["Indore" , "Surat" , "Vijayawada" , "Pune" , "Navi Mumbai" , "Raipur" , "Bhopal" , "Vadodara" , "Visakhapatnam" , "Ahmedabad"]
// city.shift()
// console.log(city)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// QUES=> Make the array of 9 elements and  add one another element at last of array.
// var city = ["Indore" ,"Surat", "Vijayawada", "Pune", "Navi Mumbai", "Raipur", "Bhopal", "Vadodara", "Visakhapatnam"]
// city.push( "Ahmedabad")
// console.log(city)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//QUES=> Make the array of 4  elements and  add one another element at first of an  array.
// var city = ["Surat", "Navi Mumbai", "Visakhapatnam", "Bhopal"];
// city.unshift("Indore")
// console.log(city)

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//QUES=> FIND THE LENGTH OF AN ARRAY.
// var city = ["Indore" , "Surat" , "Vijayawada" , "Pune" , "Navi Mumbai" , "Raipur" , "Bhopal" , "Vadodara" , "Visakhapatnam" , "Ahmedabad"]
// var len = [city.length]
// console.log(len)

//...................................................................................................................................................

// for (let an = -1; an<12; an++){
//     console.log(an)
// }

// for (let x = 0; x<110; x++){

//     console.log(x+1)
// }

/////////////////////   aditi's code ///   very helpful
// let a =[1,2,3,4,5,6,7,6,5,4,3,21,]

// let a1 = a.filter((x) => x%2===0)
// console.log(a1)

// function arr(){
//     let a = "aditi"
//     console.log(arr(a))
// }

////////////////////////////////////////////////////////#Operators and Expressions////////////////////////////////////////////////////////////////////////

//   let x =150;
//   y = 5;
// console.log("  x + y = ", x  +  y)
// console.log("  x - y = ", x  -  y)
// console.log("  x * y = ", x  *  y)
//  console.log("  x / y = ", x  /  y)

// console.log("  x ** y = ", x  **  y)// exponentia => [isme y, x ka squre ban jayga]

// console.log("  x % y = ", x  %  y)// modules=> [isme divide ka remainder aata ha. (remainder ka pata chalta hai)]

// value of a is 2 turn into 3
// console.log("x++  =", x++)  //[value +1 ho jati hai ]

/////////////////////////////////////////////////// ASSIGNMENT OPERATORS/////////////////////////////////////////

//  let assi =11;

// assi+=4             //+=
// console.log(assi)

// assi-=7             //-=
// console.log( assi)

// assi *=5
// console.log( assi)

// assi /=1
// console.log( assi)

///////////////////////////////////////////////////////#COMPARISON OPERATOR////////////////////////////////////////////////////////////////////////
/*let ashi1 =10;
ashi2= 9.4;

console.log("ashi1 == ashi2 is " ,  ashi1 == ashi2 );
console.log("ashi1 == ashi2 is " ,  ashi1 != ashi2 );
console.log("ashi1 == ashi2 is " ,  ashi1 === ashi2 );
console.log("ashi1 == ashi2 is " ,  ashi1 !== ashi2 );
*/

/////////////////////////////////////////////////////////#LOOPS///////////////////////////////////////////////////////////////////////////////////////////

// let sum = 0
// let n = prompt("Enter the value of n ")
// n = Number.parseInt(n) 
// for (let x = 1; x <=n; x++) {
//     sum += (x + 1)
//     console.log(x)
// }
// console.log("Sum the first " + n + "natural number is " + sum)

/*
let obj ={
    shiv: 99,
    shivika: 88,
    ram:89,
    raj:78,
    rohan: 67,
}
// for in loop

for  (let a in obj){
    console.log( " Marks of " + a +  " are " +obj[a] )
}

//for of loop
for (let b of "Aadi") {
    console.log(b)
}
    */

////////////////////////////////////////////////////////////# WHILE LOOPS///////////////////////////////////////////////////////////////////////////////////////////////
/*
let n = prompt("Enter your luckey number ")
n = Number.parseInt(n)
let i = 0;
while(i<n){
    console.log(i)
    i++;
}
*/
////////////////////////////////////////////////////////////# DO-WHILE LOOPS///////////////////////////////////////////////////////////////////////////////////////////////
/*
let n = prompt("Enter your luckey number ")
n = Number.parseInt(n)

let i = 10;
do{
    console.log(i)
    i++;
}while(i < n)*/

//-----------------------------------------------------------------------------PRACTICE-----------------------------------------------------------------------------------------

//IF ,ELES , ELSE IF.

//QUES=> Make a "Good day" greeting if the hour is less than 18:00:

// var Time = prompt("Correct Time Please")

// if (Time == "18:00 ") {
//     alert(Time)
//     console.log("Good day")
// }
/////////////////////////////////////////////////////////////////#FUNCTIONS/////////////////////////////////////////////////////////////////////////////
//WITHOUT FUNCTION HUM YESE INDIVISUAL CODE LIKHANGAE EK EK KA NAAM DE KE OR AGAR KUCH CHANGE KARNA HO TO EK EK KARKE KARNA PARAGA

function Naam(name, secText) {
    console.log(secText + " " + name);
    console.log(n + " is a good boy");
}

let n = "Noman"
let n2 = "Ansh"
let n3 = "Adarsh"
let n4 = "Amal"
let secText = "Good Moring ";
Naam(n, secText);
Naam(n2, secText);
Naam(n3, secText);
Naam(n4, secText);


//KABHI  ISKO  TRY MAT KARNA "DO NOT TRY AT ANY WHERE"

/*console.log(n + " is a good boy");
console.log(n2 + " is a bad boy");
console.log(n3 + " is a not good  boy");
console.log(n4 + " is a average boy");*/

