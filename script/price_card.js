var slider = document.getElementById("myRange");
var output = document.getElementById("price");
var toggle = document.getElementById("check");
var checking = document.getElementById("check");
var clicked = 0;
range_value = slider.value;
output.innerHTML = parseFloat(range_value).toFixed(2);

slider.oninput = function () {
  range_value = this.value;
  output.innerHTML = parseFloat(range_value).toFixed(2);
};

function monthly() {
    document.getElementById("month").innerHTML = "/monthly";
    range_value = slider.value;
    output.innerHTML = parseFloat(range_value).toFixed(2);

    slider.oninput = function () {
      range_value = this.value;
      output.innerHTML = parseFloat(range_value).toFixed(2);
    };
}

function Yearly() {
    document.getElementById("month").innerHTML = "/year";
    range_value = slider.value * 12;
    output.innerHTML = parseFloat(range_value).toFixed(2);

    slider.oninput = function () {
        range_value = this.value * 12;
        output.innerHTML = parseFloat(range_value).toFixed(2);
    };
}

function clicking() {
  if (checking.checked == true) {
    Yearly();
  } else {
    monthly();
  }
}