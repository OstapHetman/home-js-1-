var xmlhttp = new XMLHttpRequest();
var url = "https://mnaber2017.github.io/json/cars.json";
var myArr;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myArr = JSON.parse(this.responseText);
        var myCars = [];
        select = document.getElementById('carBrand');
        nextselect = document.getElementById('carColor');
        nextselect2 = document.getElementById('carModel');

        for (let x of myArr['info']) {
            if (myCars.indexOf(x.brand) !== -1)
                continue;
            var opt = document.createElement('option');
            opt.value = x.brand;
            opt.innerHTML = x.brand;
            select.appendChild(opt);
            myCars.push(x.brand);
        }

        select.addEventListener('change', getFilters);


    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();


// Get Filters Function
function getFilters() {
    let modelSelect = document.getElementById('carModel'),
        modelCard = document.getElementsByClassName('carModel')[0],
        models = [],
        colorSelect = document.getElementById('carColor'),
        colorCard = document.getElementsByClassName('carColor')[0],
        colors = [],
        imageDiv = document.getElementById('carImage'),
        images = [];

    modelCard.style.display = 'block';
    colorCard.style.display = 'block';
    imageDiv.style.display = 'flex';

    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            for (let x of JSON.parse(this.responseText)['info']) {

                if (x.brand !== document.getElementById('carBrand').value) continue;
                // Models
                if (models.indexOf(x.model) === -1) {
                    var opt = document.createElement('option');
                    opt.value = x.model;
                    opt.innerHTML = x.model;
                    modelSelect.appendChild(opt);
                    models.push(x.model);
                }
                // Colors
                if (colors.indexOf(x.color) === -1) {
                    var opt = document.createElement('option');
                    opt.value = x.color;
                    opt.innerHTML = x.color;
                    colorSelect.appendChild(opt);
                    colors.push(x.color);
                }
                // Images
                nextselect2.addEventListener('change', getImages);

                function getImages() {
                    if (images.indexOf(x.img) === -1) {
                        console.log();
                        var image = document.createElement('img');
                        image.src = x.img;
                        imageDiv.appendChild(image);
                        images.push(x.img);
                    }
                }

            }
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}