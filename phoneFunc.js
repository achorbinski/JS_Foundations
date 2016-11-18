var TAX_RATE = .09;

function buyPhones(BUDGET_TOTAL, PHONE_PRICE, ACCESS_PRICE){
	var phoneCount = 0;
	var accessCount = 0;
	var spendingThreshold = 65;
	var budgetRemaining = BUDGET_TOTAL;

	//Calculate the cost of a phone with tax included; store in taxedPhone
	var taxedPhone = (PHONE_PRICE * TAX_RATE) + PHONE_PRICE;

	//Calculate the cost of an accessory with tax included; store in taxedAccess
	var taxedAccess = (ACCESS_PRICE * TAX_RATE) + ACCESS_PRICE;
	//Check and see if there is enough money to buy a phone in the remaining budget
	while(budgetRemaining > spendingThreshold + taxedPhone){
			phoneCount++
			budgetRemaining -= taxedPhone;
		};
		console.log("You bought " + phoneCount + " phones.");
		console.log("You have $" + Math.round(budgetRemaining*100)/100 + " remaining.");

	while(budgetRemaining > spendingThreshold + taxedAccess){
			accessCount++
			budgetRemaining -= taxedAccess;
		};
		console.log("You bought " + accessCount + " accessories.");
		console.log("You have $" + Math.round(budgetRemaining*100)/100 + " remaining.");
};


buyPhones(500, 125, 35);
