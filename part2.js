const calculateSubtotal = (hotdogCount, friesCount, drinkCount) => hotdogCount * 3.25 + friesCount * 2 +
    drinkCount * 1.5;

const displayOrder = () => {
    const hotdogCount = document.getElementById("hotDog").value;
    const friesCount = document.getElementById("fries").value;
    const drinkCount = document.getElementById("drink").value;
    let subtotal = calculateSubtotal(hotdogCount, friesCount, drinkCount);
    let total, discount, tax;
    if (subtotal >= 20) {
        total = subtotal * 0.9 * 1.0625;
        discount = subtotal * 0.1;
        tax = subtotal * 0.9 * 0.0625;
    } else {
        total = subtotal * 1.0625;
        discount = 0;
        tax = subtotal * 0.0625;
    }
    alert(`Items ordered: ${hotdogCount} hotdog, ${friesCount} French fries, ${drinkCount} drink.\n
                   subtotal: $${subtotal.toFixed(2)}\n
                   -\n
                   discount: $${discount.toFixed(2)}\n
                   +\n
                   tax: $${tax.toFixed(2)}\n
                   =\n
                   total: $${total.toFixed(2)}\n`);
};

document.getElementById("btn").addEventListener("click", displayOrder);