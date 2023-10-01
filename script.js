//Myfirst javascript code
console.log("Hello world");//To print Hello world
//javascript Variables(for variables that can have their values changing)
let name = "Ben"
console.log(name);
//declaring the two names
let firstName = "Benson";
let secondName = "Mwangi";
let lastName = "Kimani"
console.log(firstName, secondName, lastName);
//Constants (if you dont want the variable to change)
const interestRate = 12;
console.log(interestRate);

//(1)Premitive values data types
let city = "Kerugoya" //(i)String
let postalCode = 71; //(ii)Number-Integer
let streatNumber = 5.8;//(iii)Number-Floating points
console.log(city, postalCode, streatNumber);
let isApproved = true;//(iv)Boolean(Can have either true or false as the value)
console.log(isApproved);
//(2)Reference data types

//(i)Objects (Deals with multiple related variables)
let person = {
    firstName: "Benson",
    lastName: "Mwangi",
    age: 27,
    weight: 72,
    height: 5.6,
    nationality: "Kenyan",
    city: "Kerugoya"
}
console.log(person);

let school = {
    name: "Moringa School",
    programs: "FullStack,DevOps,CyberSecurity,UX/UI",
    durationinmonths: 8,
    programingLanguages: "Html,Css,JavaScript,React,Python"
}
console.log(school);


//(ii)Arrays(used to store a list)
let selectedMeals = ['Pilau', 'Githeri', 'Beaf', 'Ugali'];//Example using strings
console.log(selectedMeals);
let moringaCourses = ['Fullstack', 'DevOps', 'Cybersecurity', 'UX/UI'];
console.log(moringaCourses);
let selectedHeights = [5.6, 5.9, 6];//Example using numbers
console.log(selectedHeights);
// Each element listed has an index i.e Pilau 0,Githeri 1 and Beaf 2.
// To access an element in an array we use their index 

//(iii)Fuctions(theyre set of statements that performs a task or calculate a value)
function greet(name) {//fuction declaration(with a singel parameter)(To perform a task)
    console.log('Hello' + name)
}
greet('Ben');
//Fuction declaration with multiple parameters
function greet(name, lastName, school) {
    console.log('Hello' + name + '' + lastName + school);
}
greet('Ben', 'Mwangi', 'Moringa')
//use of fuction in calculating a value
function square(number) {
    return number * number;
}
console.log(square(2));
//Fuction to check wether a number is old or even
function isOld(number){
    return number % 7 === 0;
}
console.log(isOld(7));
//Fuction to return the maximum two numbers
function max(a,b) {
    return a > b ? a:b;
}
console.log(max(10,20,));
//JavaScript Conditions(Used to execute a block of code if a specified condition evaluates to `true`)
//Example 0
let mass =40;
if (mass<50){
    console.log("You are underweight");
}
//Example 1
let temperature = 25;
if(temperature<0){
    console.log("its freezing outside!");
} 
else if (temperature<20){
    console.log("Its cool outside.");
} 
else{
    console.log("Its warm outside,");
}
//Example 2
let age = 34;
if(age<20){
    console.log("Youth");
}
else if(age>25){
    console.log("You are old now!")
}
else{
    console.log("Generation Z")
}
//Example 3 Using shorthand
let height= 5.8
let message = height < 4 ? "You are short":
              height > 5.5 ? "You are tall":
              "You are a bit taller";
console.log(message);
//Multiplication
//let num1=31;
//let num2=2;
//let multiply= num1*num2;
//console.log(multiply);
// Math.random
//let random = (1,100);
//function getRandomInt(min,max){
    //return Math.floor(Math.random() * (max-min+1)) + min;

//let randomInt=getRandomInt(1,100);
//console.log(randomInt);
// Remainder
//let num3 =22;
//let num4 =6;
//let mod = num3%num4;
//console.log (mod);
//Max
//let max=20;
//console.log(Math.max(2,3,15,20));

//traditional fuction

//arrow function
const area = (length,width) =>length*width;
console.log(area(4,8))
//Example 1
function myFunction(p1,p2){
    return p1*p2;
}
let result = myFunction (4,3);
console.log(result);
//example 2
function fuelConsumption(kms,price){
    return kms*price;
}
let consumption = fuelConsumption(23,211);
console.log(consumption);
//string interpolation
//Example1
let country = "kenya";
let counties = 47;
let tribes = 82;
let kenyan = `I live in ${country} with a total of ${counties} counties with ${tribes} local tribes`;
console.log(kenyan);
// Comparison in JavaScript
// Strict operators
//===
3===3