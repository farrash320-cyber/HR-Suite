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

// =====================================
// DARK MODE
// =====================================

const darkButton =
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


// =====================================
// LOAD THEME
// =====================================

let savedTheme =
localStorage.getItem(
"theme"
);

if(savedTheme==="dark"){

    document.body.classList.add(
    "dark-theme"
    );

}


// =====================================
// CARD ANIMATION
// =====================================

let cards =
document.querySelectorAll(
".card"
);

cards.forEach((card)=>{

    card.addEventListener(
    "mouseenter",()=>{

        card.style.transform =
        "translateY(-8px)";

    });

    card.addEventListener(
    "mouseleave",()=>{

        card.style.transform =
        "translateY(0px)";

    });

});


// =====================================
// PANEL ANIMATION
// =====================================

let panels =
document.querySelectorAll(
".panel"
);

panels.forEach((panel)=>{

    panel.addEventListener(
    "mouseenter",()=>{

        panel.style.transform =
        "translateY(-8px)";

    });

    panel.addEventListener(
    "mouseleave",()=>{

        panel.style.transform =
        "translateY(0px)";

    });

});


// =====================================
// QUICK ACTION BUTTON
// =====================================

let buttons =
document.querySelectorAll(
".quick-action button"
);

buttons.forEach((button)=>{

    button.addEventListener(
    "mouseenter",()=>{

        button.style.transform =
        "translateY(-5px)";

    });

    button.addEventListener(
    "mouseleave",()=>{

        button.style.transform =
        "translateY(0px)";

    });

});


// =====================================
// NOTIFICATION CLICK
// =====================================

document.querySelector(
".notification"
)
.addEventListener(
"click",()=>{

    alert(
    "You have "
    +
    notificationCount
    +
    " notifications."
    );

});


// =====================================
// SEARCH BOX
// =====================================

document.querySelector(
".search-box input"
)
.addEventListener(
"focus",()=>{

    document.querySelector(
    ".search-box"
    ).style.boxShadow =
    "0 10px 30px rgba(37,99,235,.25)";

});


document.querySelector(
".search-box input"
)
.addEventListener(
"blur",()=>{

    document.querySelector(
    ".search-box"
    ).style.boxShadow =
    "0 8px 20px rgba(0,0,0,.08)";

});


// =====================================
// INITIALIZATION
// =====================================

window.onload = ()=>{

    console.log(
    "NEXORA Human Resource Suite Loaded Successfully"
    );

};

// ====================================
// PROFILE DROPDOWN
// ====================================

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
