// Task1 - Declaring variables
let employeeName = "Richard Raynold"; // Employee's name 
const employeeID = 1; // Employee's ID 
var isActive = true; // Employee active status

// Log the values and their types to the console
console.log("Employee Name:", employeeName, "| Type:", typeof employeeName);
console.log("Employee ID:", employeeID, "| Type:", typeof employeeID);
console.log("Is Active:", isActive, "| Type:", typeof isActive);

// Task 2 - Primative Data Types
let productName = "wireless keyboard";

// Declare a constant for the product price
const productPrice = 58.99;

// Declare a variable for product availability
var isAvailable = true;

// Log each variable's value and its type to the console
console.log("Product Name:", productName, "- Type:", typeof productName);
console.log("Product Price:", productPrice, "- Type:", typeof productPrice);
console.log("Is Available:", isAvailable, "- Type:", typeof isAvailable);

// Task 3 - Number Data Type
let accountBalance = 5000; // Initial balance in dollars

// Perform basic arithmetic operations
accountBalance += 500; // Deposit $500
console.log("After deposit:", accountBalance);

accountBalance -= 200; // Withdraw $200
console.log("After withdrawal:", accountBalance);

accountBalance *= 1.05; // Add 5% interest
console.log("After adding interest:", accountBalance);

accountBalance /= 2; // Split the balance in half
console.log("After splitting balance:", accountBalance);

// Task 4 - String Data Type

let customerName = "Skyler Hope"; // Customer's name as a string

// Create a personalized welcome message
let welcomeMessage = "Hello, " + customerName + "! Welcome to our platform.";
console.log(welcomeMessage);

// Task 5 - Boolean Data Type
// Declare a variable for login status
let isLoggedIn = true; // Boolean indicating if the user is logged in

// Check access conditions
if (isLoggedIn && isActive) {
    console.log("Access granted: Welcome to the employee portal.");
} else if (!isLoggedIn) {
    console.log("Access denied: Please log in to continue.");
} else if (!isActive) {
    console.log("Access denied: Your account is inactive.");
}



