var MyString = '';
function theme1(){
    mycont = document.getElementById('themes');
    mycont.setAttribute("data-theme", "first");
}

function theme2(){
    mycont = document.getElementById('themes');
    mycont.setAttribute("data-theme", "second"); 
}

function theme3(){
    mycont = document.getElementById('themes');
    mycont.setAttribute("data-theme", "third");
}

function display(value){
    MyString += value;
    document.getElementById("answer").innerHTML = MyString;
}

function clearScreen(){
    document.getElementById("answer").innerHTML = "";
    MyString = ""
}
function calculate() {
    var p = MyString;
    var q = eval(p);
    MyString = q;
    document.getElementById("answer").innerHTML = q;
}

function Delete(){
    MyString = MyString.toString().slice(0,-1);
    document.getElementById('answer').innerHTML = MyString;
}
