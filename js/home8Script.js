// Пользователь начинает перетаскивание элемента
document.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData("Text", e.target.id); //добавляет данные в нужном формате
    e.target.style.opacity = "0.5";
    e.dataTransfer.effectAllowed = 'move';
});

// Пользователь отпускает курсор мыши в процессе перетаскивания
document.addEventListener("dragend", function(e) {
    e.target.style.opacity = "1";
});

// Перетаскиваемый элемент достигает конечного элемента
document.addEventListener("dragenter", function(e) {
    if (e.target.className == "droptarget") {
        e.target.style.border = "7px dotted #d9534f";
        e.target.style.cursor = "move";
    }
});

// Курсор мыши наведен на элемент при перетаскивании
document.addEventListener("dragover", function(e) {
    // При перетаскивании такого объекта, как ссылка, необходимо переопределить поведение браузера по умолчанию, т. е. переход по ней. Для этого нужно вызвать функцию e.preventDefault()
    e.preventDefault();
});

//  курсор мыши покидает пределы перетаскиваемого элемента
document.addEventListener("dragleave", function(e) {
    if (e.target.className == "droptarget") {
        event.target.style.border = "";
    }
});

// Происходит drop элемента
document.addEventListener("drop", function(e) {
    e.preventDefault();
    if (e.target.className == "droptarget") {
        e.target.style.border = "";
        let data = e.dataTransfer.getData("Text"); // возвращает данные
        e.target.appendChild(document.getElementById(data));
    }
});