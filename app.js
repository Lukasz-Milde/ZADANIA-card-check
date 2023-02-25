const checkLuhn = (cardNumber) => {
	cardNumber = cardNumber.replace(/[\s-]/g, "");

	if (/[^0-9]/gi.test(cardNumber)) {
		return false;
	}

	let cardDigits = cardNumber.split("").map(Number).reverse();

	const summary = cardDigits.reduce(function (total, digit, index) {
		if (index % 2 !== 0) {
			digit *= 2;
			if (digit > 9) {
				digit -= 9;
			}
		}
		return total + digit;
	}, 0);

	return summary % 10 === 0;
};

const issuer = (cardNumber) => {
	if (/^4/.test(cardNumber)) {
		return "Visa";
	}

	if (/^5[1-5]/.test(cardNumber)) {
		return "Mastercard";
	}

	if (/^3[47]/.test(cardNumber)) {
		return "American Express";
	}

	if (/^6(?:011|5)/.test(cardNumber)) {
		return "Discover";
	}
};

function cardCheck(cardNumber) {
	return {
		isValid: checkLuhn(cardNumber),
		cardIssuer: issuer(cardNumber),
	};
}

console.log(cardCheck("4658653270453015"));
