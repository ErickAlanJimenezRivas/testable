const selectedElm = document.getElementById("selected");

// Select checkbox
function showChecked() {
    selectedElm.innerHTML = document.querySelectorAll("input[name=files]:checked").length;
}

document.querySelectorAll("input[name=files]").forEach((i) => {
    i.onclick = () => showChecked();
});

// Show selected checkboxes 
function checkUncheck(checkBox) {
    get = document.getElementsByName("files");

    for (var i = 0; i < get.length; i++) {
        get[i].checked = checkBox.checked;
        selectedElm.innerHTML = document.querySelectorAll("input[name=files]:checked").length;
    }
}

// Get the elements with class="column"
var elements = document.getElementsByName("column");
var center = document.getElementsByName("center");

// Declare a loop variable
var i;

// List View
function listView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "98%";
        elements[i].style.gridTemplateColumns = "repeat(2, minmax(0, 1fr))";
        center[i].style.textAlign = "end";
    }
}

// Grid View
function gridView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "48%";
        elements[i].style.gridTemplateColumns = "repeat(1, minmax(0, 1fr))";
        center[i].style.textAlign = "center";
    }
}

/*active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
