let xmlhttp = new XMLHttpRequest(),
    url = "menu.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    let out = "";
    for (let i = 0; i < arr.length; i++) {
        out += '<a class="list-group-item" href="' + arr[i].url + '">' + arr[i].display + '</a>';
    }
    getListGroup = document.getElementById("list-group").innerHTML = out;
}