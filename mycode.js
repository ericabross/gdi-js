alert('Use the console to see all my JS practice!'); // practice comment
console.log('Secret message');

//variable practice

var rhobhCast = 6

var rhoaCast = 6
var rhonyCast = 5

var totalRH = rhoaCast + rhonyCast;


//strings practice
var firstName = 'Erica';

var fullName = firstName + ' Ross';


//variables and strings - tip calculation
var billPretip = 15;
var tipPercentage = .20;
var tip = billPretip * tipPercentage;
var totalBill = billPretip + tip;
totalBill = totalBill.toFixed (2);


var outputBill = 'Your total bill, with tip, is ' + '$' + totalBill;


//fortune teller

var numOfKids = 2;
var partnerName = 'Ryan Gosling';
var geoLocation = 'NYC';
var job = 'web developer';

var yourFortune = 'You will be a ' + job + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + numOfKids + ' kids.';

function tellFortune(numOfKids, partnerName, geoLocation, job) {
	var future ='You will be a ' + job + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + numOfKids + ' kids.';
	console.log(future);
}

tellFortune('1', 'Jon Hamm', 'L.A.', 'actress')
tellFortune('3', 'Jason Segal', 'Seattle', 'SAHM')
tellFortune('0', 'Dave Grohl', 'Virginia', 'rockstar') 


//Age calculator

var currentYear = 2019;
var birthYear = 1986;
var firstAge = currentYear - birthYear;
var secondAge = currentYear - 1 - birthYear;

var herAge = 'She is either ' + firstAge + ' or ' + secondAge + '.';


//Temperature Convertor

var inputCelsius = 20;
var outputFarenheit = (inputCelsius * 9) / 5 + 32;

var cToF = inputCelsius + '\u00B0C is ' + outputFarenheit + '\u00B0F.'

var inputFarenheit = 84;
var outputCelsius = (inputFarenheit - 32) / 9 * 5;
outputCelsius = outputCelsius.toFixed (0);

var fToC = inputFarenheit + '\u00B0F is ' + outputCelsius + '\u00B0C.'


//Temperature Convertor Random

var inputFarenheit = Math.random()*100;
inputFarenheit = inputFarenheit.toFixed (0);

var outputCelsius = (inputFarenheit - 32) / 9 * 5;
outputCelsius = outputCelsius.toFixed (0);


var fToCRandom = 'It is ' + inputFarenheit + '\u00B0F today. That is ' + outputCelsius + '\u00B0C.'

//functions

function myFav() {
	console.log ('Ryan Gosling is my favorite actor.');
}


//arguments

function callName(firstName, lastName) {
	console.log ('My name is' + firstName + lastName + '.')
}

callName(' Erica', ' Ross');


//returning values

function callName(firstName, lastName) {
	return firstName + lastName;
}

console.log (callName(' Erica', ' Ross'));

//if-else statement

var temperature = 40;
var humidity = 50;

if (temperature < 50 && humidity < 60) {
	console.log('Put on a coat.')
}

else if (temperature < 30) {
	console.log ('Put on a coat and a hat.')
}

else if (temperature < 0) {
	console.log('Just stay inside.')
}

else {
	console.log('Wear whatever you want.')
 }

 
 //What number is bigger?

 function greaterNum(num1, num2) {
 	if (num1 === num2) {
 		console.log('Those numbers are equal')
 	}

 	else if (num1 > num2) {
 		return num1;
 	}

 	else if (num2 > num1) {
 		return num2;
 	}

 	else {
 		console.log('Unable to calculate.');
 		return undefined;
 	}
 }

console.log (greaterNum(5,5));
console.log (greaterNum(10, 5));
console.log (greaterNum(30,33));
console.log (greaterNum(7, 'kitty'));


//Pluralize

function pluralize (num, word) {
	if (num != 1 && word != 'sheep' && word != 'mice') {
		return num + ' ' + word + 's';
	}

	else {
		return num + ' ' + word;
	}
}

console.log('I have ' + pluralize(10, 'poster'));
console.log('I have ' + pluralize(3, 'mice'));












