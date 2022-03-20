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

function validation(){
  let email = document.myform.email;
  if (
        email.value.indexOf("@") == -1 ||
        email.value.indexOf(".") == -1
      ) {
        document.getElementById("email").style.backgroundImage = "url(../images/icon-error.svg)";
        document.getElementById("email").style.border = "3px solid hsl(0, 94%, 66%)"
        document.getElementById("email").style.borderRadius = "5px 5px 5px 0px";
        document.getElementById("msg").style.opacity = 1;
        return;
      } else {
        document.getElementById("email").style.backgroundImage = "";
        document.getElementById("email").style.border = "0px"
        document.getElementById("msg").style.opacity = 0;
        email.value = "";
      }
}

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
tab1.addEventListener("click", tab1func);
tab2.addEventListener("click", tab2func);
tab3.addEventListener("click", tab3func);

function tab1func() {
  tab1.classList.add('active');
  tab2.classList.remove('active');
  tab3.classList.remove('active');

  document.getElementById("images").style.backgroundImage = "url(../images/illustration-features-tab-1.svg)";
  document.getElementById("topic").innerHTML = "Bookmark in one click";
  document.getElementById("details").innerHTML = `Organize your bookmarks however you like. Our <br />simple
  drag-and-drop interface gives you complete <br />control over how
  you manage your favourite sites.`
}

function tab2func() {
  tab2.classList.add('active');
  tab1.classList.remove('active');
  tab3.classList.remove('active');

  document.getElementById("images").style.backgroundImage = "url(../images/illustration-features-tab-2.svg)";
  document.getElementById("topic").innerHTML = "Intelligent Search";
  document.getElementById("details").innerHTML = `Our powerful search feature will help you find saved <br>
  sites in no time at all. No need to trawl through all of <br> your bookmarks.`
  
}

function tab3func() {
  tab3.classList.add('active');
  tab2.classList.remove('active');
  tab1.classList.remove('active');

  document.getElementById("images").style.backgroundImage = "url(../images/illustration-features-tab-3.svg)";
  document.getElementById("topic").innerHTML = "Share your Bookmarks";
  document.getElementById("details").innerHTML = `Easily share your bookmarks and collections with <br> others.
  create a sharable link that you can send at <br> the click of a button.`
}