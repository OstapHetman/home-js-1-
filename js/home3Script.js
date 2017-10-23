function checkAge() {
    let requiredAge = 18,
        inputValueName = document.getElementById('name').value,
        inputValueAge = +(document.getElementById('age').value),
        yourAge = document.getElementById('yourAge'),
        yourName = document.getElementById('yourName');

    switch (true) {
        case (inputValueAge === requiredAge):
            yourAge.innerText = 'Congratulations ' + inputValueName + ' your age is valid ';
            break;

        case (inputValueAge > requiredAge):
            (yourAge.innerText = inputValueName + ' Your age exceeds ' + (inputValueAge - requiredAge) + ' year(s)');
            break;

        case (inputValueAge < requiredAge && inputValueAge > 0):
            (yourAge.innerText = inputValueName + ' You need wait ' + (requiredAge - inputValueAge) + ' year(s) to your 18');
            break;

        case (inputValueAge == ''):
            (yourAge.innerText = 'Enter your Age!');
            break;
            (yourAge.innerText = 'Enter a valid value ');
            break;
    }

    // Helper Function
    function checkName() {
        (inputValueName.length == 0) ? yourName.innerText = 'Enter your Name!': yourName.innerText = '';
    }

    checkName();
}