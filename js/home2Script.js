function calculate() {

    let decimals = 2,
        error = 'Enter a valid data',
        result = document.getElementById('result'),
        inputValueNumber = +(document.getElementById('number').value),
        inputValueNumberAfterDot = +(document.getElementById('dot').value),
        roundedNotNull = +(Math.round(inputValueNumber + 'e' + inputValueNumberAfterDot) + 'e-' + inputValueNumberAfterDot),
        roundedNull = +(Math.round(inputValueNumber + 'e' + decimals) + 'e-' + decimals);

    (inputValueNumberAfterDot === 0) ? result.innerText = roundedNull: result.innerText = roundedNotNull;
}