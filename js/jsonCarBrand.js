let newXmlhttp = new XMLHttpRequest(),
    src = "carBrand.json";

newXmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myCarArr = JSON.parse(this.responseText);
        getCarBrand(myCarArr);
    }
};

newXmlhttp.open("GET", src, true);
newXmlhttp.send();

function getCarBrand(carArr) {
    let out = "";
    for (let i = 0; i < carArr.length; i++) {
        out += '<option>' + carArr[i].carBrand + '</option>';
    }

    getSelect = document.getElementById("carBrand").innerHTML = out;
    getSelect = document.getElementById("carBrand").childNodes[0];
    getSelect.setAttribute("selected", "");
    getSelect.setAttribute("disabled", "");
    getSelect.setAttribute("hidden", "");

    console.log(getSelect);

}