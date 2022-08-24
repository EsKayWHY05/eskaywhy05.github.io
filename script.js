var project1 = document.getElementById("project1");

var button1pressed = false;
function collapse() {
    button1pressed = true;
}
function draw() {
    if(button1pressed == true) {
    project1.style.height = "100px";
    }
}