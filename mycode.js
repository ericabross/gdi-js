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
















