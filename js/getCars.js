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

        select.addEventListener('change', function() {
            getModels();
            getColors();
        });
        nextselect.addEventListener('change', getImages);
        nextselect2.addEventListener('change', getImages);

    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();


// Get Models Function
function getModels() {
    let modelSelect = document.getElementById('carModel'),
        modelCard = document.getElementsByClassName('carModel')[0],
        models = [];

    modelCard.style.display = 'block';
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
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
}

//Get Colors Function

function getColors() {
    let colorSelect = document.getElementById('carColor'),
        colorCard = document.getElementsByClassName('carColor')[0],
        colors = [];

    colorCard.style.display = 'block';
    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            for (let x of JSON.parse(this.responseText)['info']) {

                if (x.brand === document.getElementById('carBrand').value && colors.indexOf(x.color) === -1) {

                    var opt = document.createElement('option');
                    opt.value = x.color;
                    opt.innerHTML = x.color;
                    colorSelect.appendChild(opt);

                    colors.push(x.color);
                }
            }
        }
    }
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
}

//Get Images Function

function getImages() {
    let imageDiv = document.getElementById('carImage');
    let images = [];

    imageDiv.style.display = 'block';
    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            for (let x of JSON.parse(this.responseText)['info']) {

                if (x.brand === document.getElementById('carBrand').value && images.indexOf(x.img) === -1) {
                    var image = document.createElement('img');
                    // image += '<img src="' + x.img + '">';
                    image.src = x.img

                    console.log(image);

                    imageDiv.innerHTML = image;
                    imageDiv.appendChild(image);

                    images.push(x.img);
                }
            }
        }
    }
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
}