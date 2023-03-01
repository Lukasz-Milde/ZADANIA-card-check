const cardCheck = require("./app");

test("Checking if card number is valid and return issuer", () => {
	expect(cardCheck("4658653270453015")).toEqual({
		isValid: true,
		cardIssuer: "Visa",
	});
});
