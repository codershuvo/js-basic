// variable 
var bananaPrice = 12; 
console.log(bananaPrice); 


var temperature = 19; 
console.log(temperature); 

var age = 23; 
console.log(age); 


var phonePrice = 13000; 
console.log(phonePrice);


// variable type 
var seenAfter = 21; 
console.log(typeof seenAfter); 

var myName = 'Mosfiqur Rahman'; 
console.log(typeof myName); 

var isHot = true; 
var isRich = false; 
console.log(typeof isHot); 

var friendsName; 
console.log(typeof friendsName); 

var hisName = null; 
console.log(hisName); 



// variable naming convention and best practice
var myName = 'Md. Mosfiqur Rahman'; 
console.log(myName);

var friendsAge = 22; 

var friendName = 'Hero Abdul'; 
friendName = 'Hero Nadim'; 
friendName = 'Hero Jamal'; 
friendName = 'Hero Atik'; 
console.log(friendName);


var userFirstName = 'Mosfiqur'
var myOfficialDescription = "name"


// explore string case change index split
var promise = 'I promise i will work hard to become a programmer';
console.log(promise.toLowerCase()); // lowercase
console.log(promise.toUpperCase()); // uppercase
console.log(promise.indexOf('pro')); // position ba index
console.log(promise.split(' ')); // alada vag kora 



// integer float parseInt parseFloat type conversion
var number1 = 25;  // integer number
var number2 = '15.5';  // float number
number2 = parseFloat(number2); // string to float number
number2 = +number2; // string to float number
number2 = parseInt(number2); // string to integer number
number1 = "" + number1; // number to string

var number3 = 0.1; 
var number4 = 0.2; 
var total = number3 + number4;
var result = total.toFixed(1); // koto decimal porjonto dekhabe
result = parseFloat(result); 
console.log(typeof result); 



// mathematical operations in javascript  +   -   *   /  %  ++ -- 
var price1 = 25; 
var price2 = 5; 
price2++;
var result = price1 % price2; 
console.log(result); 


// math absolute round floor ceil
var number = 5.9545; 
var absoluteNumber = Math.abs(number);  // positive number - to +
var absoluteNumber = Math.round(number);  // .5 er besi hole upor
var ceilNumber = Math.ceil(number); // upor a uthhbe . er besi
var floorNumber = Math.floor(number); // niche a nambe . er besi
var result = Math.random(); // random number 
console.log(result); 







