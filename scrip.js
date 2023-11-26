function submitForm() {
    
    alert("Форма отправлена!");

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let birthdate = document.getElementById("birthdate").value;
    let color = document.getElementById("color").value;
    let file = document.getElementById("file").value;
    let slider = document.getElementById("slider").value;

    let selectedCategories = [];
    let categoryCheckboxes = document.getElementsByName("category[]");
    for (var i = 0; i < categoryCheckboxes.length; i++) {
        if (categoryCheckboxes[i].checked) {
            selectedCategories.push(categoryCheckboxes[i].value);
        }
    }

    let gender = document.querySelector('input[name="gender"]:checked').value;
    let updates = document.getElementById("updates").value;
    let about = document.getElementById("about").value;

    if (confirm("Хотите проверить данные?(console)")) {
        console.log("Имя:", name);
        console.log("Возраст:", age);
        console.log("Пароль:", password);
        console.log("Электронная почта:", email);
        console.log("Дата рождения:", birthdate);
        console.log("Цвет аватарки:", color);
        console.log("Загруженный файл:", file);
        console.log("Время на сайте:", slider);
        console.log("Выбранные категории:", selectedCategories);
        console.log("Пол:", gender);
        console.log("Выбранное обновление:", updates);
        console.log("О себе:", about);
    }
}