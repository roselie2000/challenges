var flag = true;
var element;
function Onclick(elementID, ArrID, qID) {
    element = document.getElementById(elementID);
    let arrow = document.getElementById(ArrID);
    arrow.classList.toggle("rotating");
    document.getElementById(qID).classList.toggle("active_font");
    if (flag) {
      show();
    } else {
      hide();
    }
}

function show() {
    element.style.display = "block";
    flag = false;
}

function hide() {
    element.style.display = "none";
    flag = true;
}