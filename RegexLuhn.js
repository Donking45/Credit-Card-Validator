//  readline handles user input in a Node.js environment.
const readline = require('readline');

// The class LuhnValidator has a constructor to initialize the class with an array of digits.
class LuhnValidator {
  constructor(digits) {
    this.digits = digits;
  }

// The method isValidLuhn checks the validity of the credit card number using the Luhn algorithm.
  isValidLuhn() {
    let checkDigit = 0;

    for (let i = this.digits.length - 2; i >= 0; --i) {
      checkDigit += (i % 2 === 0)
        ? (this.digits[i] > 4 ? this.digits[i] * 2 - 9 : this.digits[i] * 2)
        : this.digits[i];
    }

    return (10 - (checkDigit % 10)) === this.digits[this.digits.length - 1];
  }
}

// This sets up a readline interface for handling input from the user (process.stdin) and outputting information (process.stdout).
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter a card number
rl.question('Enter the card number: ', (cardNumberString) => {
  // Convert the string to an array of digits
  const cardNumberDigits = cardNumberString.split('').map(Number);

  // Create an instance of LuhnValidator with the entered digits
  const luhnValidator = new LuhnValidator(cardNumberDigits);

  // Validate the card number
  const isValid = luhnValidator.isValidLuhn();

  // Display the result
  if (isValid) {
    console.log("The card number is valid!");
  } else {
    console.log("The card number is not valid!");
  }

  // Close the readline interface
  rl.close();
});


/* this script uses a LuhnValidator class to check the validity of a credit card number entered by the user. It prompts the user for input, performs the Luhn validation, and then displays the result. 
  The readline module is used to handle user interaction in a Node.js environment.*/