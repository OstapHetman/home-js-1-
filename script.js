function checkAge() {
    var requiredAge = 18;
    var inputValueName = document.getElementById('name').value;
    var inputValueAge = Number(document.getElementById('age').value);
    var yourAge = document.getElementById('yourAge');
    var yourName = document.getElementById('yourName');

    if (inputValueAge === requiredAge) {
        yourAge.innerHTML = 'Congratulations ' + inputValueName + ' your age is valid ';

    } else if (inputValueAge > requiredAge) {
        yourAge.innerHTML = inputValueName + ' Your age exceeds ' + (inputValueAge - requiredAge) + ' year(s)';

    } else if (inputValueAge < requiredAge && inputValueAge > 0) {
        yourAge.innerHTML = inputValueName + ' You need wait ' + (requiredAge - inputValueAge) + ' year(s) to your 18';

    } else if (inputValueAge == '') {
        yourAge.innerHTML = 'Enter your Age!';

    } else {
        yourAge.innerHTML = 'Enter a valid value ';
    }

    if (inputValueName.length == 0 || inputValueName == null || inputValueName == '') {
        yourName.innerHTML = 'Enter your Name!';
    } else {
        yourName.innerHTML = '';
    }
}