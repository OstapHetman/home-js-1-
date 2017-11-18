var xmlhttp = new XMLHttpRequest();
var url = "https://mnaber2017.github.io/json/cars.json";
var myArr;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myArr = JSON.parse(this.responseText);
        var myCars = [];
        select = document.getElementById('carBrand');
        // console.log(this.getAllResponseHeaders());

        for (let x of myArr['info']) {
            if (myCars.indexOf(x.brand) !== -1)
                continue;
            var opt = document.createElement('option');
            opt.value = x.brand;
            opt.innerHTML = x.brand;
            select.appendChild(opt);
            myCars.push(x.brand);
        }

        select.addEventListener('change', getModels);

    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();



function getModels() {
    let modelSelect = document.getElementById('carModel');
    let models = [];

    modelSelect.style.display = 'block';
    // el = colorSelect.firstChild;
    // colorSelect.innerHTML = '';
    // colorSelect.appendChild(el);
    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            for (let x of JSON.parse(this.responseText)['info']) {


                if (x.brand === document.getElementById('carBrand').value && models.indexOf(x.model) === -1) {

                    var opt = document.createElement('option');
                    opt.value = x.model;
                    opt.innerHTML = x.model;
                    modelSelect.appendChild(opt);

                    models.push(x.model);

                }

            }
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}