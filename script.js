const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const date = document.getElementById("date");
const user = document.getElementById("user");
 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(username.value)
    console.log(email.value)
    console.log(date.value)
    console.log(user.value)
 }
 )
