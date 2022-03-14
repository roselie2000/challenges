let form = document.querySelector("form");
console.log(form);
let text = document.getElementById("text");
let todocon = document.querySelector(".todo-con");
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    Addingtodo();
});

let todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
    todos.forEach(element => {
        Addingtodo(element);
    });
}

function Addingtodo(elem) { 
    let todoColl = document.createElement('div');
    todoColl.classList.add("todocoll");
    let todotext = text.value;
    if (elem) {
        todotext = elem.text;
    }

    if (todotext) {
        todoColl.innerHTML = `
        <div class="todo-li">
        <div class="check ${elem && elem.complete ? "active-check" : ""}">
        <img src="../images/icon-check.svg" alt="check box" />
        </div>
        <p class="ptag ${elem && elem.complete ? "complete" : ""}">${todotext}</p>
        <button class="close">
        <img src="../images/icon-cross.svg" alt="close" />
        </button>
        </div>
        <div class="hr"></div>`;
        todocon.appendChild(todoColl);

        updateLs();
    }

    let close = todoColl.querySelector(".close");
    close.addEventListener("click", () =>{
        todoColl.remove();
        updateLs();
    });

    let check = todoColl.querySelector(".check");
    check.addEventListener('click', () => {
        check.classList.toggle("active-check");
        todoColl.children[0].children[1].classList.add("complete");
        updateLs();
    });
    text.value = ""
}

function updateLs() {
    let ptag = document.querySelectorAll(".ptag");
    let arr = [];
    ptag.forEach(element => {
        arr.push({
            text:element.innerText,
            complete:element.classList.contains("complete")
        });
    });
    localStorage.setItem("todos", JSON.stringify(arr));
}

let info = document.querySelectorAll(".choice p");
let todoli = document.querySelectorAll(".todocoll");
console.log(todoli)


info.forEach(element => {
    // console.log(todoli);
   element.addEventListener("click", () => {
       info.forEach(item => {
           item.classList.remove("active");
       });
       element.classList.add("active")
       if(element.innerText == "Active") {
            todoli.forEach(elem => {
                if (!elem.children[0].children[1].classList.contains("complete")){
                    elem.style.display = "block";
                }
                else {
                    elem.style.display = "none";
                }
            });
       }else if(element.innerText == "Completed") {
            todoli.forEach(elem => {
            if (elem.children[0].children[1].classList.contains("complete")){
                elem.style.display = "block";
            }
            else {
                elem.style.display = "none";
            }
        });
       } else {
        todoli.forEach(elem => {
            elem.style.display = "block";
        });
       }
   });
});

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    todoli.forEach(elem => {
        if(elem.children[0].children[1].classList.contains("complete")){
            elem.remove();
            updateLs();
        }
    });
});

let left = document.querySelector(".left");
function setitem() {
    let activeTodo = document.querySelectorAll(".todo-li .active-check");
    let diff = todoli.length - activeTodo.length;
    left.innerHTML = `${diff} items left`;
}
setitem();

let theme1 = document.getElementById("sun");
let theme2 = document.getElementById("moon");
// let body = document.querySelectorAll("theme");
// console.log(body);

theme1.addEventListener("click", () => {
    theme1.style.visibility = "hidden";
    theme2.style.visibility = "visible";
    document.querySelector(".banner").style.backgroundImage = 'url(../images/bg-desktop-light.jpg)';
    document.body.setAttribute("data-theme", "light");
});

theme2.addEventListener("click", () => {
    theme2.style.visibility = "hidden";
    theme1.style.visibility = "visible";
    document.querySelector(".banner").style.backgroundImage = 'url(../images/bg-desktop-dark.jpg)';
    document.body.setAttribute("data-theme", "dark");
});