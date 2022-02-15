function updateCase(updateCase) {
    const caseInput = document.getElementById('case-number');
    //const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    const casePrice = document.getElementById('total-case-price');
    const totalCasePrice = casePrice.innerText;
    if (updateCase == true) {
        caseInput.value = parseInt(caseNumber) + 1;
        casePrice.innerText = parseInt(totalCasePrice) + 59;
    }
    else if (updateCase == false && caseInput.value > 0) {
        caseInput.value = parseInt(caseNumber) - 1;
        casePrice.innerText = parseInt(totalCasePrice) - 59;
    }
}


//hand case events
document.getElementById('case-plus').addEventListener('click', function name(params) {
    updateCase(true);
})

document.getElementById('case minus').addEventListener('click', function name(params) {

    updateCase(false);

})