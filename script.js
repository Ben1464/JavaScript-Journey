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


//(ii)Arrays(used to store a list)
let selectedMeals = ['Pilau', 'Githeri', 'Beaf', 'Ugali'];//Example using strings
selectedMeals[2] = "Chapatis";
console.log(selectedMeals);
let moringaCourses = ['Fullstack', 'DevOps', 'Cybersecurity', 'UX/UI'];
moringaCourses . length; //To know the lenght of an array
console.log(moringaCourses[1]);
let selectedHeights = [5.6, 5.9, 6];//Example using numbers
console.log(selectedHeights);
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

//arrow function
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

