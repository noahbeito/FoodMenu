function displayCategoryOptions() {
    var category = document.getElementById("category").value;
    var categoryOptions = document.getElementById("categoryOptions");

    // Clear existing options
    categoryOptions.innerHTML = "";

    // Add category options to the listbox
    var options = menu[category];
    for (let i = 0; i < options.length; i++) {
        console.log(options[i])
        categoryOptions.innerHTML += "<li>" + options[i] + "</li>";
    }
}