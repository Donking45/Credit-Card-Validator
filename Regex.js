class CreditCardValidator {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
        this.regex = {
            visa: /^4[1-5]\d{2}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}$/,
            mastercard: /^5[1-5]\d{2}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}$/,
        };
    }

    validate() {
        for (const [cardType, pattern] of Object.entries(this.regex)) {
            if (pattern.test(this.cardNumber)) {
                return `${cardType.toUpperCase()} card is valid.`;
            }
        }
        return "Invalid card number or card type not supported.";
    }
}

// Example usage
const masterCardValidator = new CreditCardValidator("5211 4100 5999 8411");
console.log(masterCardValidator.validate());

const visaValidator = new CreditCardValidator("4187 4262 5723 5360");
console.log(visaValidator.validate());
