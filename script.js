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
//Example 2
let school = {
    name: "Moringa School",
    programs: "FullStack,DevOps,CyberSecurity,UX/UI",
    durationinmonths: 8,
    programingLanguages: "Html,Css,JavaScript,React,Python"
}
console.log(school);
//Example 3
let company ={
    name:"Greenlife",
    industry: "Agriculture",
    popularProducts:['Greencop','Ranger','Optimizer']
}
console.log(company);
//Example 4 
// representing objects in a table format
const family = {
    mother: {
        firstName: "Susan",
        lastName: "Doyle",
        age: 32
    },
    father: {
        firstName: "John",
        lastName: "Doyle",
        age: 33
    },
    daughter: {
        firstName: "Lily",
        lastName: "Doyle",
        age: 5
    },
    son: {
        firstName: "Mike",
        lastName: "Doyle",
        age: 8
    }
}
console.table(family); 
//Example 6
const employeesDetails={
    Benny:
{
        Experience:6,
        Department:'sales',
        Returns:2000000
        
},
    Moses:
    {
        Experience:2,
        Department:'Marketing',
        Returns:1000000


    },
    Rose:
    {
        Experience:2,
        Department:'Collections',
        Returns:3000000

    }


}
console.table(employeesDetails);
//Arrays
let selectedMeals = ['Pilau', 'Githeri', 'Beaf', 'Ugali'];//Example using strings
selectedMeals[2] = "Chapatis";
selectedMeals.pop();// To remove the last element of the array.
selectedMeals.shift();// To remove the first elemet of the array
console.log(selectedMeals);
let moringaCourses = ['Fullstack', 'DevOps', 'Cybersecurity', 'UX/UI','Data science'];
console.log(moringaCourses.slice(0,3));//Used to retarn a shallow copy of the array
console.log(moringaCourses[2]);//To select a particular array
console.log(moringaCourses.length);//To know the lenght of an array
let selectedHeights = [5.6, 5.9, 6];//Example using numbers
console.log(selectedHeights);
//Mapping arrays( .Map is used to crerate a new array by calling a provided function on every element in the original array.)
// Example 1
let numbers = [1,2,3,4,5,6]
let squareNumbers = numbers.map(num=>num*num);
console.log(squareNumbers);
//Example 2
const names = ['James', 'John','Alext','Antony'];
const uppercasedNames = names.map(name=>name.toUpperCase());
console.log(uppercasedNames);

// Each element listed has an index i.e Pilau 0,Githeri 1 and Beaf 2.
// To access an element in an array we use their index 
// Adding items to an array
let selectedJobs= ['Nurses','Mechanics','Accountants','Agronomist'];
selectedJobs.push('Tailor');// Using(.push) to add an element
selectedJobs.unshift('Security','Engineering');//using(.unshift) to add elements to the array
console.log(selectedJobs);
// Creating a copy of an array
const registeredCompanies =['Apple','Microsoft','Windows'];
const copyOfRegisteredCompanies =[...registeredCompanies ];
console.log(registeredCompanies);

//(iii)Fuctions(theyre set of statements that performs a task or calculate a value)
function greet(name) {//fuction declaration(with a singel parameter)(To perform a task)
    console.log('Hello' + name)
}
greet('Ben');
//Declaring a function with expression
const studentDetails = function studentDetails(name,age,sex) {
    console.log('Hello' + name+''+ age+''+sex);
}
studentDetails('Robert',25,'male');
//Rest Parameters(allows a function to accept any number of parameters)
//A fuction can only accept only one rest parameter and it should be the last parameter"
function collectThings(x,...y){
console.log(x);
console.log(...y)
}
collectThings(1,2,3,4,5,6,7,8,9,10);
//Arrow function
//Example 0
const add =function(a,b){
    return a*b;
}
add (2,5);
//(Above example can be writen as below)
const multiply = (a,b) => a*b;
console.log(add(2,5));
//More examples
let volume=(length,width,height)=>length*width*height;
console.log(volume(4,2,6));
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
//Nested functions(closure=Nested functions & fuctions scope)
function outer(){
    console.log(outer);
     function inner(){
   console.log(inner);
   inner();
     }
     outer();
}
//Function scope
//Rule 1:Variables defined inside a fuction cannot be accessed anywhere outside that fuction.
function numbersAvailable(){
    let a =10;
    const b =20;
    var c = 30;
    console.log(a,b,c);
}
numbersAvailable();
//Rule 2: A fuction can access all variables defined inside the scope it is defined in.
let c =40;
    const d =50;
    var e = 60;
    function numbersAvailableIn(){
    }
    console.log(c,d,e);
    numbersAvailableIn();
    //Callback functions(involves fuctions using another fuction as a parameter or as an urgument)
    //Example 1(Using a fuction as a parameter)
    function foo(bar){
        bar();
    }
    foo(function(){//Anonymous fuction.
        console.log('bar');
    });
//Higher Order Function.
//HOF is a fuction that takes one or more fuctions as urguments and returns a fuction as a value for it.
//Example 1
function getCapture(camera){
    camera();
}
getCapture(function(){ //Anonymous function
    console.log('camera is on');
});
// Pure fuctions(Its a function that produces same output for the same input)
function sayGreetings(name){
    return `Hello ${name}`;
}
sayGreetings('Joshua');
//IIFE(Imedieyly invoked function expression(Execute a fuction imedietly its invoked ))
(function(){
    console.log('IIFE');
})();
//Recursion(reffers to a function that calls its self.(Every recursion must have base condition))
const zoo = function buz(){
    buz();
}
//Example 1 with base condition
function fetchWater(count){
if(count===0){
    console.log("No more water left");
    return;
}
console.log("fetching water...");
fetchWater(count-1);
}
fetchWater(5);

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
//trial
let distance = 1400;
if(distance<140){
    console.log('One can use a motobike')
}
else if (distance<=140){
    console.log('one will have to use a vehicle')
}
else {

    console.log('you will have to use an aeroplane')
}
//Example 3 Using shorthand
let height= 5.8;
let message = height < 4 ? "You are short":
              height > 5.5 ? "You are tall":
              "You are a bit taller";
console.log(message);
//Example 4
let hour = 8;
if (hour >=6 && hour <10){
    console.log('Good morning');
}
else if(hour>= 12 && hour<18){
    console.log('Good afternoon')
}
else{
    console.log('Good evening');
}

//switch and case statements(used when comparing one variable to a bunch of values)
//Example 1
const favouriteAnimal = "shark";
switch (favouriteAnimal){
    case "cat":
    console.log('cats are great')
    break
    case "dog":
        console.log('dogs are good companion')
        break
    case "shark":
        console.log('sharks are dagerous') 
        break   
default:
    console.log('I have never heard of such an animal')
}
//Example 2
let mostCompetitiveTeam = 'Chelsea';
switch (mostCompetitiveTeam){
    case "Manchester city":
    console.log("the greatest")
    break
    case "Arsenal":
    console.log('the gunners')
    break
    case "Chelsea":
        console.log('the blues')
        break
    case "Manchester united":    
    console.log('the red devils')
    break
    default:
    console.log('the rest are not among the big 4')
}
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


//string interpolation
//Example1
let country = "kenya";
let counties = 47;
let tribes = 82;
let kenyan = `I live in ${country} with a total of ${counties} counties that have a total of ${tribes} local tribes`;
console.log(kenyan);
// Comparison in JavaScript
// Strict operators
//strict equality ===
3===3
//strict ineqyality !==
3!=="3"
//Loops(loops repeat an action a number of times)
//Example 1 (For loop)
for (let i=0; i<5; i++){
    console.log("This should be repeated 5 times!",i);
}
//Example 2 (while loop)
let i=1;//initialization
while (i<=5){
    console.log("This also should be repeated 5 times!",i);
    i++;
}

