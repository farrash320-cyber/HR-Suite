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

        hour:"2-digit",

        minute:"2-digit",

        second:"2-digit"

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
// DASHBOARD READY
// ======================================

console.log(

"NEXORA Dashboard Loaded"

);

// ======================================
// NOTIFICATION PANEL
// ======================================

const notification =
document.querySelector(
".notification"
);

const notificationPanel =
document.querySelector(
".notification-panel"
);

if(notification && notificationPanel){

notification.addEventListener(
"click",()=>{

if(
notificationPanel.style.display==="block"
){

notificationPanel.style.display="none";

}
else{

notificationPanel.style.display="block";

dropdown.style.display="none";

}

});

}




// ======================================
// PROFILE DROPDOWN
// ======================================

const profile =
document.querySelector(
".profile"
);

const dropdown =
document.querySelector(
".dropdown-menu"
);

if(profile && dropdown){

profile.addEventListener(
"click",()=>{

if(
dropdown.style.display==="block"
){

dropdown.style.display="none";

}
else{

dropdown.style.display="block";

notificationPanel.style.display="none";

}

});

}




// ======================================
// ATTENDANCE CHART
// ======================================

const chartCanvas =
document.getElementById(
"attendanceChart"
);

if(chartCanvas){

new Chart(

chartCanvas,

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

maintainAspectRatio:false

}

}

);

}




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
// QUICK ACTION
// ======================================

function goEmployee(){

    window.location.href =
    "employee.html";

}

function goAttendance(){

    window.location.href =
    "attendance.html";

}

function goLeave(){

    window.location.href =
    "leave.html";

}

function goPayroll(){

    window.location.href =
    "payroll.html";

}




// ======================================
// SEARCH FUNCTION
// ======================================

const searchInput =
document.getElementById(
"searchInput"
);

if(searchInput){

searchInput.addEventListener(
"keypress",(e)=>{

if(e.key==="Enter"){

let keyword =
e.target.value
.toLowerCase();

if(
keyword.includes(
"employee"
)
){

window.location.href =
"employee.html";

}

else if(
keyword.includes(
"attendance"
)
){

window.location.href =
"attendance.html";

}

else if(
keyword.includes(
"leave"
)
){

window.location.href =
"leave.html";

}

else if(
keyword.includes(
"payroll"
)
){

window.location.href =
"payroll.html";

}

else{

alert(
"Page not found."
);

}

}

});

}




// ======================================
// DASHBOARD STATISTICS
// ======================================

const totalEmployee =
document.getElementById(
"totalEmployee"
);

const presentToday =
document.getElementById(
"presentToday"
);

const onLeave =
document.getElementById(
"onLeave"
);

const offDay =
document.getElementById(
"offDay"
);

if(totalEmployee){

totalEmployee.innerHTML =
125;

}

if(presentToday){

presentToday.innerHTML =
117;

}

if(onLeave){

onLeave.innerHTML =
4;

}

if(offDay){

offDay.innerHTML =
4;

}




// ======================================
// RECENT ACTIVITY DATA
// ======================================

const recentActivity = [

"James checked in",

"John requested leave",

"Payroll generated",

"Meeting reminder"

];

console.log(
recentActivity
);




// ======================================
// CLOSE PANEL WHEN CLICK OUTSIDE
// ======================================

window.addEventListener(
"click",(e)=>{

if(
notification &&
!notification.contains(
e.target
)
){

notificationPanel.style.display =
"none";

}


if(
profile &&
!profile.contains(
e.target
)
){

dropdown.style.display =
"none";

}

});




// ======================================
// DASHBOARD INITIALIZATION
// ======================================

window.onload = ()=>{

console.log(

"NEXORA Human Resource Suite Ready"

);

};

// ======================================
// EMPLOYEE DASHBOARD DATA
// ======================================

function loadDashboardData(){

let employeeData =
localStorage.getItem(
"employeeData"
);


if(!employeeData){

return;

}


let temp =
document.createElement(
"tbody"
);

temp.innerHTML =
employeeData;


let rows =
temp.querySelectorAll(
"tr"
);


let total =
rows.length;

let active = 0;

let inactive = 0;

let departmentList = [];



rows.forEach((row)=>{

let department =
row.cells[2]
.innerText
.trim();


let status =
row.cells[4]
.innerText
.trim();



if(
status==="Active"
){

active++;

}
else{

inactive++;

}



if(
!departmentList.includes(
department
)
){

departmentList.push(
department
);

}

});



// UPDATE CARD

document.getElementById(
"totalEmployees"
).innerText =
total;


document.getElementById(
"activeEmployees"
).innerText =
active;


document.getElementById(
"inactiveEmployees"
).innerText =
inactive;


document.getElementById(
"departmentCount"
).innerText =
departmentList.length;

}
