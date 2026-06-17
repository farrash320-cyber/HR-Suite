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

        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"

    };

    document.getElementById(
        "clock"
    ).innerHTML =
    now.toLocaleTimeString([],options);

}

updateClock();

setInterval(updateClock,1000);


// =====================================
// DYNAMIC GREETING
// =====================================

let hour =
new Date().getHours();

let greetingText = "";

if(hour < 12){

    greetingText =
    "Good Morning, Admin";

}
else if(hour < 18){

    greetingText =
    "Good Afternoon, Admin";

}
else{

    greetingText =
    "Good Evening, Admin";

}


document.querySelector(
".greeting h2"
).innerHTML =
greetingText;


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
// DASHBOARD READY
// =====================================

console.log(
"NEXORA Dashboard Ready"
);
