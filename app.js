function updateProductNumber(product, productName, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    const casePrice = document.getElementById('total-' + productName + '-price');
    const totalProductPrice = casePrice.innerText;
    // const subTotalValue = subTotal.innerText;

    if (isIncreasing == true) {
        productInput.value = parseInt(productNumber) + 1;
        if (productName == 'phone') {
            casePrice.innerText = parseInt(totalProductPrice) + 1219;
        } else {
            casePrice.innerText = parseInt(totalProductPrice) + 59;
        }
    }
    else if (isIncreasing == false && productInput.value > 0) {
        productInput.value = parseInt(productNumber) - 1;
        if (productName == 'phone') {
            casePrice.innerText = parseInt(totalProductPrice) - 1219;
        } else {
            casePrice.innerText = parseInt(totalProductPrice) - 59;
        }
    }
    // calculateTotal
    calculateTotal();

}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById('tax').innerText = tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('total').innerText = total;
}
//hand phone case events
document.getElementById('phone-plus').addEventListener('click', function name(params) {
    updateProductNumber('phone', 'phone', true);
});
document.getElementById('phone-minus').addEventListener('click', function name(params) {
    updateProductNumber('phone', 'phone', false);
});

//hand case events
document.getElementById('case-plus').addEventListener('click', function name(params) {
    updateProductNumber('case', 'case', true);
});

document.getElementById('case minus').addEventListener('click', function name(params) {
    updateProductNumber('case', 'case', false);
});

console.log()

// sub-total