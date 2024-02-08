## A BRIEF DESCRIPTION ON THE REGEX PATTERN I EMPLOYED IN MY CODE

- **^5[1-5]:** The credit card number should start with a 5 followed by a digit between 1 and 5, which is typical for Mastercard.

- **^4[1-5]:** The credit card number starts with a 4 followed by a digit between 1 and 5, which is typical for Visa card.

- **\d{2}:** Match any two digits.

- **[ -]?:** This part allows for an optional space or hyphen. It is common for people to input card numbers with spaces or dashes for better readability.

- **\d{4}[ -]?:** This pattern repeats for three more groups of four digits, each separated by an optional space or hyphen.

- **$**: Ensures that the pattern matches the entire string.

Regex aims to match the common format of a Mastercard and Visa card number, including optional spaces or hyphens between groups of digits. The use of \d represents any digit, and {n} specifies the exact number of occurrences. The [1-5] ensures the second digit is within the valid range for Mastercard and Visa Card.