function validation(){
  let email = document.myform.email;
  if (
        email.value.indexOf("@") == -1 ||
        email.value.indexOf(".") == -1
      ) {
        document.getElementById("err").style.opacity = 1;
        document.getElementById("msg").style.opacity = 1;
        return;
      } else {
        document.getElementById("err").style.opacity = 0;
        document.getElementById("msg").style.opacity = 0;
        email.value = "";
      }
}