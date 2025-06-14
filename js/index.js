// VARIABLES

// 1.Keyword, 2.Name of the variable, 3.Assign a value to your variable

let greeting;
greeting = 'Good Afternoon!';
console.log(greeting);

let myName = 'Winifred';
myName = 'Winnie';
console.log(myName);

// DATA TYPES
// 1.String, 2.Number, 3.Boolean, 4.Null, 5.Undefined, 6.Object, 7. Array
let firstName = 'John'; // String
let age = 96; // Number
let isStudent = true; // Boolean (true or false)
let address = null; // Null (no value)
let phoneNumber; // Undefined (no value assigned yet)
let person = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    isStudent: false
}; // Object (key-value pairs)
let colours = ['red', 'green', 'blue']; // Array (ordered list of values)

console.log(firstName);
console.log(age);
console.log(isStudent);
console.log(address);
console.log(phoneNumber);
console.log(person);
console.log(colours);


// OPERATORS
// 1.Arithmetic Operators, 2.Assignment Operators, 3.Comparison Operators, 4.Logical Operators
// Arithmetic Operators: +, -, *, /, %
let num1 = 10;
let num2 = 5;

let sum = num1 + num2; // Addition
console.log('The Sum:', sum);

let difference = num1 - num2; // Subtraction
console.log('The Difference:', difference);

let product = num1 * num2; // Multiplication
console.log('The Product:', product);

let quotient = num1 / num2; // Division
console.log('The Quotient:', quotient);

let remainder = num1 % num2; // Modulus (remainder)
console.log('The Remainder:', remainder);


// Assignment Operators: =, +=, -=, *=, /=, %=
let x = 10;
x += 5; // x = x + 5
console.log('X: ', x)

let a = 20;
a -= 5; // a = a - 5   
console.log('A: ', a)

let b = 15;
b *= 2; // b = b * 2
console.log('B: ', b)

let c = 30;
c /= 3; // c = c / 3
console.log('C: ', c)

// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
let num3 = 10;
let num4 = 11;

let e = 2;
let d = '2';

let isEqual = num3 == num4; // Loose equality (checks value only)
console.log('Is Equal (Loose):', isEqual);

let isEqualStrict = num3 === num4; // Loose equality (checks value only)
console.log('Is Equal (Strict):', isEqualStrict);

let isNotEqual = e != d; // not equal
console.log('Is Not Equal:', isNotEqual);

let isNotEqualStrict = e !== d; // not equal (strict)
console.log('Is Not Equal (Strict):', isNotEqualStrict);

let isGreater = num3 > num4; // Greater than
console.log('Is Greater:', isGreater);

let isLess = num3 < num4; // Less than
console.log('Is Less:', isLess);

let isGreaterOrEqual = num3 >= num4; // Greater than or equal to
console.log('Is Greater or Equal:', isGreaterOrEqual);

let isLessOrEqual = num3 <= num4; // Less than or equal to
console.log('Is Less or Equal:', isLessOrEqual);


// Logical Operators: && (AND), || (OR), ! (NOT)
let isLoggedIn = true;
let isPaid = false;

let andCondition = isLoggedIn && isPaid; // AND
console.log('AND Condition:', andCondition);

let orCondition = isLoggedIn || isPaid; // OR
console.log('OR Condition:', orCondition);

let notCondition = !isLoggedIn; // NOT (if something is not true)
console.log('NOT Condition:', notCondition);


// Ternary Operator
let ageCheck = age >= 18 ? 'Adult' : 'Minor'; // Ternary operator
console.log('Age Check:', ageCheck); 

// CONDITIONAL STATEMENTS
// 1.If statement, 2.If else statement, 3.Switch statement
// If statement
if (age >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are a minor.');
}

let timeofDay = 'afternoon';
// If else statement 
if (timeofDay === 'morning') {
    console.log('Good Morning!');
} else if (timeofDay === 'afternoon') {
    console.log('Good Afternoon!');
} else {
    console.log('Good Evening!');
}

// Switch statement
switch (timeofDay) {
    case 'morning':
        console.log('Good Morning!');
        break;
    case 'afternoon':
        console.log('Good Afternoon!');
        break;
    default:
        console.log('Good Evening!');
        break;
}

function toggleIntroduction() {
    let intro = document.getElementById('intro-text');

    if (intro.style.display === 'none') {
        intro.style.display = 'block';
        console.log('Introduction is now visible.');
    } else {
        intro.style.display = 'none';
        console.log('Introduction is now hidden.');
    }
}