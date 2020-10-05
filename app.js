// selectors
const time = document.getElementById("time");
const greet = document.getElementById("greeting");
let name = document.getElementById("name");
let focus = document.getElementById("focus");

//functions
function setTime() {
    let today = new Date(),
     hour = today.getHours(),
     min = today.getMinutes(),
     sec = today.getSeconds();

    const amPm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(setTime, 1000);
}

function addZero(n){
    return (parseInt(n,10)<10 ? "0": " ") +n;
}

function setBgGreet () {
    let today = new Date(),
    hour = today.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage="url('../img/morning.jpg')";
        greeting.textContent = "Good Morning";
        document.body.style.color= "black";
    }else if (hour < 18) {
        document.body.style.backgroundImage="url('../img/afternoon.jpg')";
        greeting.textContent = "Good Afternoon";
        document.body.style.color= "red";
    }else {
        document.body.style.backgroundImage="url('../img/evening.jpg')";
        greeting.textContent = "Good Evening";
        document.body.style.color="white";
    }

}

function getName (){
    if (localStorage.getItem("name")=== null){
        name.textContent = "[Your Name]"
    }else {
        name.textContent = localStorage.getItem("name");
    }
}

function setName(e){
    if(e.type === "keypress") {
        if (e.which == 13 || e.keyCode == 13){
            localStorage.setItem("name",e.target.innerText);
            name.blur();
        }
    }else {
        localStorage.setItem("name",e.target.innerText);
    }
}

function getFocus (){
    if (localStorage.getItem("focus")=== null){
        focus.textContent = "[Your focus?]"
    }else {
        focus.textContent = localStorage.getItem("focus");
    }
}

function setFocus(e){
    if(e.type === "keypress") {
        if (e.which == 13 || e.keyCode == 13){
            localStorage.setItem("focus",e.target.innerText);
            focus.blur();
        }
    }else {
        localStorage.setItem("focus",e.target.innerText);
    }
}

// event listeners
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
// call functions
setTime();
setBgGreet();
getName();
getFocus();
setName();
setFocus();