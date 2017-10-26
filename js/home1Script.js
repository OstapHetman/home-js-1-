function checkAge() {
    let requiredAge = 18,
        inputValueName = document.getElementById('name').value,
        inputValueAge = +(document.getElementById('age').value),
        yourAge = document.getElementById('yourAge'),
        yourName = document.getElementById('yourName'),
        image = document.createElement('IMG');

    function secretContent() {
        image.src = "it.jpg";
        document.body.appendChild(image);
    }

    (inputValueAge === requiredAge) ? secretContent():

        (inputValueAge > requiredAge) ? (yourAge.innerText = inputValueName + ' Your age exceeds ' + (inputValueAge - requiredAge) + ' year(s)') :

        (inputValueAge < requiredAge && inputValueAge > 0) ? (yourAge.innerText = inputValueName + ' You need wait ' + (requiredAge - inputValueAge) + ' year(s) to your 18') :

        (inputValueAge == '') ? (yourAge.innerText = 'Enter your Age!') : (yourAge.innerText = 'Enter a valid value ');

    function checkName() {
        (inputValueName.length == 0) ? yourName.innerText = 'Enter your Name!': yourName.innerText = '';
    }

    checkName();
}