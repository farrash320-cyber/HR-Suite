// ======================================
// NEXORA DASHBOARD
// ======================================


// ======================================
// SESSION PROTECTION
// ======================================

protectPage();


// ======================================
// REAL TIME CLOCK
// ======================================

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



// ======================================
// DYNAMIC GREETING
// ======================================

function updateGreeting(){

    let hour =
    new Date().getHours();

    let greeting = "";

    if(hour < 12){

        greeting =
        "Good Morning, Admin";

    }

    else if(hour < 18){

        greeting =
        "Good Afternoon, Admin";

    }

    else{

        greeting =
        "Good Evening, Admin";

    }

    document.querySelector(
    ".greeting h2"
    ).innerHTML =
    greeting;

}

updateGreeting();




// ======================================
// DARK MODE
// ======================================

let darkButton =
document.querySelector(
".dark-mode"
);

darkButton.addEventListener(
"click",()=>{

    document.body.classList.toggle(
    "dark-theme"
    );

    if(
    document.body.classList.contains(
    "dark-theme"
    )
    ){

        localStorage.setItem(
        "theme",
        "dark"
        );

    }

    else{

        localStorage.setItem(
        "theme",
        "light"
        );

    }

});




// ======================================
// LOAD THEME
// ======================================

if(
localStorage.getItem(
"theme"
)==="dark"
){

    document.body.classList.add(
    "dark-theme"
    );

}




// ======================================
// NOTIFICATION PANEL
// ======================================

let notification =
document.querySelector(
".notification"
);

let notificationPanel =
document.querySelector(
".notification-panel"
);

notification.addEventListener(
"click",()=>{

if(
notificationPanel.style.display==="block"
){

notificationPanel.style.display="none";

}
else{

notificationPanel.style.display="block";

}

});



// ======================================
// ATTENDANCE CHART
// ======================================

new Chart(

document.getElementById(
"attendanceChart"
),

{

type:"line",

data:{

labels:[
"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat",
"Sun"
],

datasets:[{

label:"Attendance",

data:[
110,
117,
115,
118,
120,
116,
114
],

borderWidth:3,

tension:.4,

fill:false

}]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{

display:true

}

}

}

}

);




// ======================================
// CARD ANIMATION
// ======================================

let cards =
document.querySelectorAll(
".card"
);

cards.forEach((card)=>{

card.addEventListener(
"mouseenter",()=>{

card.style.transform =
"translateY(-5px)";

});

card.addEventListener(
"mouseleave",()=>{

card.style.transform =
"translateY(0px)";

});

});




// ======================================
// PANEL ANIMATION
// ======================================

let panels =
document.querySelectorAll(
".panel"
);

panels.forEach((panel)=>{

panel.addEventListener(
"mouseenter",()=>{

panel.style.transform =
"translateY(-5px)";

});

panel.addEventListener(
"mouseleave",()=>{

panel.style.transform =
"translateY(0px)";

});

});




// ======================================
// LOGOUT
// ======================================

function logout(){

    let confirmLogout =
    confirm(
    "Logout from NEXORA?"
    );

    if(confirmLogout){

        sessionStorage.removeItem(
        "isLoggedIn"
        );

        window.location.href =
        "index.html";

    }

}




// ======================================
// DASHBOARD READY
// ======================================

console.log(

"NEXORA Human Resource Suite Ready"

);

// ======================================
// PROFILE DROPDOWN
// ======================================

let profile =
document.querySelector(
".profile"
);

let dropdown =
document.querySelector(
".dropdown-menu"
);

profile.addEventListener(
"click",()=>{

if(
dropdown.style.display==="block"
){

dropdown.style.display="none";

}
else{

dropdown.style.display="block";

}

});
