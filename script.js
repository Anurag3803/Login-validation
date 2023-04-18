


let username = document.getElementById("username");
username.addEventListener("submit", function (){
    if(username.value == " "){
        console.log("username empty");
}
return false;
});





function validateForm(){
    // alert("anurag");
}

let password = document.getElementById('password');
password.addEventListener("submit", validateForm);


