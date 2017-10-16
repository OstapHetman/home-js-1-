function checkAge() {
    let requiredAge = 18,
        inputValueName = document.getElementById('name').value,
        inputValueAge = +(document.getElementById('age').value),
        yourAge = document.getElementById('yourAge'),
        yourName = document.getElementById('yourName'),
        image = document.createElement('IMG');

    if (inputValueAge === requiredAge) {
        yourAge.innerText = 'Congratulations ' + inputValueName + ' your age is valid ';
        secretContent();

    } else if (inputValueAge > requiredAge) {
        yourAge.innerText = inputValueName + ' Your age exceeds ' + (inputValueAge - requiredAge) + ' year(s)';

    } else if (inputValueAge < requiredAge && inputValueAge > 0) {
        yourAge.innerText = inputValueName + ' You need wait ' + (requiredAge - inputValueAge) + ' year(s) to your 18';

    } else if (inputValueAge == '') {
        yourAge.innerText = 'Enter your Age!';

    } else {
        yourAge.innerText = 'Enter a valid value ';
    }

    function checkName() {
        (inputValueName.length == 0) ? yourName.innerText = 'Enter your Name!': yourName.innerText = '';

    }

    function secretContent() {
        image.src = "it.jpg";
        document.body.appendChild(image);
    }

    checkName();
}