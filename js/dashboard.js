// =====================================
// NEXORA DASHBOARD
// =====================================


// =====================================
// PROTECT PAGE
// =====================================

protectPage();


// =====================================
// REAL TIME CLOCK
// =====================================

function updateClock(){

    let now = new Date();

    let options = {

        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'

    };

    document.getElementById("clock").innerHTML =
    now.toLocaleTimeString([], options);

}

setInterval(updateClock,1000);

updateClock();


// =====================================
// DYNAMIC GREETING
// =====================================

let currentHour =
new Date().getHours();

let greeting = "";

if(currentHour < 12){

    greeting =
    "Good Morning, Admin";

}
else if(currentHour < 18){

    greeting =
    "Good Afternoon, Admin";

}
else{

    greeting =
    "Good Evening, Admin";

}

document.querySelector(".top-bar h2")
.innerHTML = greeting;


// =====================================
// NOTIFICATION
// =====================================

let notificationCount = 3;

document.querySelector(
".notification span"
).innerHTML =
notificationCount;


// =====================================
// LOGOUT
// =====================================

function logout(){

    let confirmLogout =
    confirm(
    "Are you sure you want to logout?"
    );

    if(confirmLogout){

        sessionStorage.removeItem(
        "isLoggedIn"
        );

        window.location.href =
        "index.html";

    }

}


// =====================================
// CARD ANIMATION
// =====================================

let cards =
document.querySelectorAll(".card");

cards.forEach((card)=>{

    card.addEventListener(
        "mouseenter",
        ()=>{

            card.style.transform =
            "translateY(-5px)";

        }
    );


    card.addEventListener(
        "mouseleave",
        ()=>{

            card.style.transform =
            "translateY(0px)";

        }
    );

});


// =====================================
// PANEL HOVER
// =====================================

let panels =
document.querySelectorAll(".panel");

panels.forEach((panel)=>{

    panel.addEventListener(
        "mouseenter",
        ()=>{

            panel.style.transform =
            "translateY(-5px)";

            panel.style.transition =
            ".3s";

        }
    );

    panel.addEventListener(
        "mouseleave",
        ()=>{

            panel.style.transform =
            "translateY(0px)";

        }
    );

});


// =====================================
// DASHBOARD READY
// =====================================

console.log(
"NEXORA Dashboard Ready"
);
