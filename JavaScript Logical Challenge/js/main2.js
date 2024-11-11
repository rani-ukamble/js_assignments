function splitBill() {
    // Get input values and convert them to numbers
    let billInput = parseFloat(document.getElementById("bill_input").value);
    let personsInput = parseInt(document.getElementById("persons_input").value);

    // Validate inputs
    if (isNaN(billInput) || isNaN(personsInput) || personsInput <= 0) {
        alert("Please enter valid numbers for both the bill and the number of persons.");
        return;
    }

    // Calculate tax (8% of the bill)
    let taxAmount = billInput * 0.08;
    let totalBillWithTax = billInput + taxAmount;

    // Determine tip percentage based on the total bill with tax
    let tipPercentage;
    if (totalBillWithTax < 50) {
        tipPercentage = 0.15; // 15% tip
    } else if (totalBillWithTax <= 100) {
        tipPercentage = 0.20; // 20% tip
    } else {
        tipPercentage = 0.25; // 25% tip
    }

    // Calculate tip based on total bill with tax
    let tipAmount = totalBillWithTax * tipPercentage;

    // Calculate final total (bill + tax + tip)
    let finalTotal = totalBillWithTax + tipAmount;

    // Calculate each person's share
    let splitAmount = finalTotal / personsInput;

    // Display result with two decimal places
    alert("Each person's share of the bill, including tax and tip, is: $" + splitAmount.toFixed(2));
}
