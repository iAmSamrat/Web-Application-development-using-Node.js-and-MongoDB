function takename(){
    var username = document.getElementById("fname").value;
    document.querySelector(".root").innerHTML = username
}
function hideshowpass(){
    var inputfield = document.getElementById("fname")

    if(inputfield.type === "text"){
        inputfield.type = "password"
        document.querySelector("#pass").value = "Show Password"
    }else{
        inputfield.type = "text"
        document.querySelector("#pass").value = "Hide Password"
    }
}
function checklength(){
    var username = document.getElementById("fname").value;
    if(username.length < 5){
        document.querySelector(".root").style.color = "red"
        document.querySelector(".root").innerHTML = "Bad Password"
    }else{
        document.querySelector(".root").style.color = "green"
        document.querySelector(".root").innerHTML = "Good password"
    }
}
(function(){
    var header = document.createElement("h1")
    header.innerHTML = "This is a header"
    document.querySelector(".root").appendChild(header)
})()

function check(){
        document.getElementById("fname").style.border = "2px solid red";
}
function uncheck(){
    document.getElementById("fname").style.border = "1px solid black";
}