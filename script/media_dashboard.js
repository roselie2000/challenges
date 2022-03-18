var mycont = document.getElementById("themes");
var checking = document.getElementById("check");

function clicking() {
    if (checking.checked == true) {
      document.body.style.backgroundImage = `url('../images/light_bg.png')`;
      mycont.setAttribute("data-theme", "light");
    } else {
      document.body.style.backgroundImage = `url('../images/bg.png')`;
      mycont.setAttribute("data-theme", "dark");
    }
}