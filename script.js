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



//Data types in javascript

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
let company = {
    name: "Greenlife",
    industry: "Agriculture",
    popularProducts: ['Greencop', 'Ranger', 'Optimizer']
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
const employeesDetails = {
    Benny:
    {
        Experience: 6,
        Department: 'sales',
        Returns: 2000000

    },
    Moses:
    {
        Experience: 2,
        Department: 'Marketing',
        Returns: 1000000


    },
    Rose:
    {
        Experience: 2,
        Department: 'Collections',
        Returns: 3000000

    }


}
console.table(employeesDetails);




//Arrays (gives a list of items)

//Aray Methods(.push(),.unshift(),.pop(),.shift(),.splice()).


let selectedMeals = ['Pilau', 'Githeri', 'Beaf', 'Ugali'];//Example using strings
selectedMeals[2] = "Chapatis";//To select a particular item in the array we use bracket notation
selectedMeals.pop();// To remove the last element of the array.
selectedMeals.shift();// To remove the first elemet of the array
console.log(selectedMeals);
// Each element listed has an index i.e Pilau 0,Githeri 1 and Beaf 2.
// To access an element in an array we use their index 
// Adding items to an array
let selectedJobs = ['Nurses', 'Mechanics', 'Accountants', 'Agronomist'];
selectedJobs.push('Tailor');// Using(.push) to add an element
selectedJobs.unshift('Security', 'Engineering');//using(.unshift) to add elements to the array
selectedJobs.splice(1,1); //this will remove mechanics from the original array
selectedJobs.splice (0,1,"Developer","Doctor");//adding Developer and Doctor to the orifinal array
console.log(selectedJobs);
// Creating a copy of an array
const registeredCompanies = ['Apple', 'Microsoft', 'Windows'];
const copyOfRegisteredCompanies = [...registeredCompanies];
console.log(registeredCompanies);
let moringaCourses = ['Fullstack', 'DevOps', 'Cybersecurity', 'UX/UI', 'Data science'];
console.log(moringaCourses.slice(0, 3));//Used to retarn a shallow copy of the array
console.log(moringaCourses[2]);//To select a particular array
console.log(moringaCourses.length);//To know the lenght of an array
//Array Iterators (these refers to methods that return iterator objects,allowing one to access each element of an array sequentially)
// Examples (.entries(),.value(),and .keys(),.

// Example 1 (.entries() (Example to log both the index and value)
const fruitTrees = ["Mango","Aple","Oranges","Quavas","Avocados"];
const fruitEntries = fruitTrees.entries();
for(let [index,fruit] of fruitEntries){
    console.log(`index: ${index},value:${fruit}`);
}
//Example 2 (.value() (Returns a new value for each element in an array))
//Example 3 (.key() (Returns the key of the arrays))

//High order functions
//Examples(.map(),.find(),.reduce(),.for each(),.filter())


//.Map() Mapping arrays(is used to crate a new array by calling a provided function on every element in the original array.)
// Example 1
let numbers = [1, 2, 3, 4, 5, 6]
let squareNumbers = numbers.map(num => num * num);
console.log(squareNumbers);
//Example 2
const names = ['James', 'John', 'Alext', 'Antony'];
const uppercasedNames = names.map(name => name.toUpperCase());
console.log(uppercasedNames);

//.Find() Finding an element in an array( is used to retrive the first element from an array that meets a cetrain condition specified by a function)
//Example 1(Finding the first number less than 50)
const digits = [20, 30, 40, 23, 100];
const found = digits.find(digits => digits < 50);
console.log(found);
//Example 2 (Finding a user in an array with the name Jane)
const users = [
    { id: 1, username: "Jospaht" },
    { id: 2, username: "Jane" },
    { id: 3, username: "Albert" },
    { id: 4, username: "Benard" }
];
const user = users.find(user => user.username === "Jane");
console.log(user);
//Exawithmple 3 (Finding a book by name Unplugged Aplpha by Richard Cooper)
const books = [
    { id: 1, title: "Limitless", Author: "Jim Kwik" },
    { id: 2, title: "The Alchemist", Author: "Poule Cohelo" },
    { id: 3, title: "The Unplugged Alpha", Author: "Richard Cooper" },
    { id: 4, title: "The Rational Male", Author: "Rollo Tomassi" },
];
const findBookByTitle = title => books.find(book => book.title === title);
console.log(findBookByTitle('The Unplugged Alpha'));

//.Reduce() is used to apply a function aganist an accumulator and each element in an array to reduce it to a single value
//Exampler 1 ( to concatenate an an array of string into a single string)
const words = ["Hello", "Kenya", "We here now", "!"];
const sentence = words.reduce((accumulator, currentWord) => accumulator + "" + currentWord, "");
console.log(sentence.trim());
//Example 2(to count occurence of each fruit in an array)
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'mango'];
const countFruits = fruits.reduce((accumulator, currentFruit) => {
    accumulator[currentFruit] = (accumulator[currentFruit] || 0) + 1;
    return accumulator;
}, {});
console.log(countFruits);

//.forEach()(it does something for each item in an array without producing a new array or a specified output)
//Example 1
const players = ['Job', 'Alan', 'Bob'];
players.forEach(player => {
    console.log(`Hello, ${player}!`);
});
//.Filter()(is used to create another array with elements that passs a specified test(provided as a function))
//Example 1 (filtering empty strings in an array)
const strings = ['Hello', '', 'Man', '', 'True'];
const nonEmptyString = strings.filter(str => str !== "");
console.log(nonEmptyString);

//Exanmple 2 (filtering strings shorter than 5 characters)
const brands = ['Noki', 'Sumsang', 'Tecno', 'Infinix'];
const longStrings = strings.filter(str => str.length > 6);
console.log(longStrings);


//(iii)Fuctions(theyre set of statements that performs a task or calculate a value)
function greet(name) {//fuction declaration(with a singel parameter)(To perform a task)
    console.log('Hello' + name)
}
greet('Ben');
//Declaring a function as an expression
const studentDetails = function studentDetails(name, age, sex) {
    console.log('Hello' + name + '' + age + '' + sex);
}
studentDetails('Robert', 25, 'male');

//Rest Parameters(allows a function to accept any number of parameters)
//A fuction can only accept only one rest parameter and it should be the last parameter"
function collectThings(x, ...y) {
    console.log(x);
    console.log(...y)
}
collectThings(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//Arrow function
//Example 0
const add = function (a, b) {
    return a * b;
}
add(2, 5);
//(Above example can be writen as below)
const multiply = (a, b) => a * b;
console.log(add(2, 5));
//More examples
let volume = (length, width, height) => length * width * height;
console.log(volume(4, 2, 6));
const area = (length, width) => length * width;
console.log(area(4, 8))
//Example 1
function myFunction(p1, p2) {
    return p1 * p2;
}
let result = myFunction(4, 3);
console.log(result);
//example 2
function fuelConsumption(kms, price) {
    return kms * price;
}
let consumption = fuelConsumption(23, 211);
console.log(consumption);
//use of fuction in calculating a value
function square(number) {
    return number * number;
}
console.log(square(2));
//Fuction to check wether a number is old or even
function isOld(number) {
    return number % 7 === 0;
}
console.log(isOld(7));
//Fuction to return the maximum two numbers
function max(a, b) {
    return a > b ? a : b;
}
console.log(max(10, 20,));
//Nested functions(closure=Nested functions & fuctions scope)
function outer() {
    console.log(outer);
    function inner() {
        console.log(inner);
        inner();
    }
    outer();
}
//Function scope
//Rule 1:Variables defined inside a fuction cannot be accessed anywhere outside that fuction.
function numbersAvailable() {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(a, b, c);
}
numbersAvailable();
//Rule 2: A fuction can access all variables defined inside the scope it is defined in.
let c = 40;
const d = 50;
var e = 60;
function numbersAvailableIn() {
}
console.log(c, d, e);
numbersAvailableIn();
//Callback functions(involves fuctions using another fuction as a parameter or as an urgument)
//Example 1(Using a fuction as a parameter)
function foo(bar) {
    bar();
}
foo(function () {//Anonymous fuction.
    console.log('bar');
});
//Higher Order Function.
//HOF is a fuction that takes one or more fuctions as urguments and returns a fuction as a value for it.
//Example 1(END)
function getCapture(camera) {
    camera();
}
getCapture(function () { //Anonymous function
    console.log('camera is on');
});
// Pure fuctions(Its a function that produces same output for the same input)
function sayGreetings(name) {
    return `Hello ${name}`;
}
sayGreetings('Joshua');
//IIFE(Imedieyly invoked function expression(Execute a fuction imedietly its invoked ))
(function () {
    console.log('IIFE');
})();
//Recursion(reffers to a function that calls its self.(Every recursion must have base condition))
const zoo = function buz() {
    buz();
}
//Example 1 with base condition
function fetchWater(count) {
    if (count === 0) {
        console.log("No more water left");
        return;
    }
    console.log("fetching water...");
    fetchWater(count - 1);
}
fetchWater(5);

//JavaScript Conditions(Used to execute a block of code if a specified condition evaluates to `true`)
//Example 0
let mass = 40;
if (mass < 50) {
    console.log("You are underweight");
}
//Example 1
let temperature = 25;
if (temperature < 0) {
    console.log("its freezing outside!");
}
else if (temperature < 20) {
    console.log("Its cool outside.");
}
else {
    console.log("Its warm outside,");
}
//Example 2
let age = 34;
if (age < 20) {
    console.log("Youth");
}
else if (age > 25) {
    console.log("You are old now!")
}
else {
    console.log("Generation Z")
}
//trial
let distance = 1400;
if (distance < 140) {
    console.log('One can use a motobike')
}
else if (distance <= 140) {
    console.log('one will have to use a vehicle')
}
else {

    console.log('you will have to use an aeroplane')
}
//Example 3 Using shorthand
let height = 5.8;
let message = height < 4 ? "You are short" :
    height > 5.5 ? "You are tall" :
        "You are a bit taller";
console.log(message);
//Example 4
let hour = 8;
if (hour >= 6 && hour < 10) {
    console.log('Good morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon')
}
else {
    console.log('Good evening');
}

//switch and case statements(used when comparing one variable to a bunch of values)
//Example 1
const favouriteAnimal = "shark";
switch (favouriteAnimal) {
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
switch (mostCompetitiveTeam) {
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
3 === 3
//strict ineqyality !==
3 !== "3"
//Loops(loops repeat an action a number of times)
//Example 1 (For loop)
for (let i = 3; i < 8; i++) {
    console.log("This should be repeated 5 times!", i);
}
//Example 2
const vegetables = ['Kales', 'Spinach', 'Managu', 'Malenge', 'Carrots'];
for (let i = 1; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}
//Example 3 (while loop)
let i = 1;//initialization
while (i <= 5) {
    console.log("This also should be repeated 5 times!", i);
    i++;
}



//DOM(Document Object Model) (Used to manupulate the content,style and structure of a project/website)
// 1. Method chaining(to select h1)
document.querySelector('h1');
// Using chaining to delete an element(to delete h1)
document.querySelector('h1').remove();
//Finding DOM nodes

//1. getElementById(Gets elements by their ids)
// Example 1
//<div><h5 id="greeting">Hello!</h5></div>(we can select h5 by using; document.getElementById('greeting')

// 2. getElementByClassName()(Gets elements by their class names)

// 3. getElementsByTagName() (Gets elements by their tag names e.g h1,div,section)
// To remove an elelemnt or a tag from dom 
// (element id,name,tag).remove()
// To create a new element we use
const (Name of the element) = document.createElement(h1,div,etc) 
// 2. To append it to the body we use (document.body.appendChild(name of the new element))


//Three pillars of web development
//1. Recognizing the event
//2. Manipulating the DOM 
//3. Communiating with the server

// To add a new h1 tag
const h1 = document.createElement('h1');
h1.textContent = 'Hello World!';
document.body.appendChild(h1);
//adding h2
const h2 = document.createElement('h2')
h2.textContent = 'its for trials';
document.body.appendChild(h2);
//adding a div
let divElement = document.createElement('div');
divElement.innerHTML = 'man must go hard';
divElement.textContent = 'Or he will have to go home';
document.body.appendChild(divElement);


// DOM events
//adding dom events to an element
//example 1
const button = document.getElementById("btn");
button.addEventListener("click", function () {
    alert("Button was clicked");
});
// adding content to the p tag
const pElement = document.querySelector("p");
pElement.textContent = "How about us doing this for life";
document.body.appendChild(pElement);
pElement.addEventListener("click", function () {
    alert("someone clicked me");
});
//HTTP Request methods
// 1. GET (The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.)
// 2. POST (The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server. )
// 3. HEAD (The HEAD method asks for a response identical to a GET request, but without the response body.)
// 4. PUT(TDELETE
// 5. DELETE (The DELETE method deletes the specified resource.)
// 6. CONNECT (The CONNECT method establishes a tunnel to the server identified by the target resource.)
// 7. PATCH (The PATCH method applies partial modifications to a resource.)


//As Asynchronous fuctions 
