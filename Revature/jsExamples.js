// Welcome to JavaScript
// jsExamples.js


/* 
JavaScript is an Object Oriented Programming Language
	-Doesn't support method/function overloading
	-Loosely typed vs Strongly Typed
	-2 Scopes: Global, Function
	- == vs ===
	- functions can be variables
	- Semicolon injection
	- Hoisting
	- Scopes
	- Flow Control: if, else if, else
	- Truthy/Falsy
	

Strongly typed
int x=10;

Loosely typed
var x = "10";
or 
var x= 10; No need to specify data type
*/

/* 
Scoped in JavaScript
	Global
	Function
	
*/

//Global Variables

var a,b,c,d,e,f,g,h,i;
a=10;	//number
b="10";	//String
c=true;	//Boolean
d={};	//object
e=null;	//null
//f		//undefined
g=(0/0); //NaN
h=[];	//Array
i=function(){
	console.log("I'm again in the i function!");
}

// function i(){
	// console.log("I'm in the i function!");
// }

//-------------------------------------------String Length
var x="hello";
x.length; //returns 5

//-------------------------------------------Type Cocercion
//Converts the data type to match and then compare
5==5; 	//true
5=="5"; // true

5!=5; //false
5!=5; //false

5===5 	//true
5==="5" //false


//---------------Flow Control: if, loops

function add(a,b){
	
	if(a > 10){
		console.log("a is too high");
	}else if(b < 5){
		console.log("b is too low")
	}else{
		console.log(a+b);
	}
}

//--------------------------- Operators
	// <, >, >=, <=, ==, ===, !=, !==, ||, &&
	
//Overloading= the same function/method name, different parameters
// Note: JavaScript doesn't support Method/Function Overloading

function concat(x,y){
	console.log("in 2 parameter method")
	var newString= x+y;
	return newString;
	
}

function concat(x,y,z){
	console.log("in 3 parameter method");
	var newString= x+y+z;
	return newString;
	
}

//----------------------------- Semicolon Injection
function test(){
	var x= true;
	//semicolon injection
	return //JavaScript tried to be a semicolonless language but FAILED!
		x;
}

//------------------------------- Truthy
function tryThis(){
	//Falsy: null, 0, undefined, NaN, false, "" empty string
	if(null){
		console.log(true);
	}else{
		console.log(false);
	}
}


//------------------------------------Hoisting
function huh(num){
	myNum=num
	return myNum;
	var myNum; //myNum declaration is Hoisted to the top of the current scope
}

// JSON: JavaScript Object Notation
//------------------------------------- Objects
var a;
function myobj(){
	var book={
		// key/value pairs
		title:"Harry Potter",
		year:2001,
		author: {
			name: "JK",
			dob: 1965
		}
	}
	a= book;
}

//-------------------------------- Array
var myArr= [2,"foo",42];
function myArrFn(myVar){
	//Loop through the Array passed in
	for(i=0;i<myVar.length;i++){
		console.log(myVar[i]);
	}
}

function myArrFn2(myVar){
	var i=0;
	while(i < myVar.length){
		console.log(myVar[i]);
		i++;
	}
}

function myArrFn3(myVar){
	myVar.forEach(function(element){
		console.log(element);
	})
}

function myArrFn4(myVar){
	//implicit vs explicit
	//implicit = something happening automatically
	//Explicit = must be done manually
	for(var i in myVar){
		console.log(myVar[i]);
	}
}

//------------------------------Arguments implicitly passed object into function
function sum(){
	//sums x amount of number when we don't take any arguments;
	var sum=0;
	var i=0;
	while(arguments[i] != undefined){
		sum += arguments[i];
		i++;
	}
	console.log(sum);
}