// ======================================
// NEXORA DASHBOARD FINAL
// ======================================

protectPage();




// ======================================
// REAL TIME CLOCK
// ======================================

function updateClock(){

let now =
new Date();

document.getElementById(
"clock"
).innerHTML =

now.toLocaleTimeString();

}

updateClock();

setInterval(
updateClock,
1000
);




// ======================================
// DYNAMIC GREETING
// ======================================

function updateGreeting(){

let hour =
new Date()
.getHours();

let greeting =
"Good Evening, Admin";

if(hour<12){

greeting =
"Good Morning, Admin";

}
else if(hour<18){

greeting =
"Good Afternoon, Admin";

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

if(
localStorage.getItem(
"theme"
)==="dark"
){

document.body.classList.add(
"dark-theme"
);

}

if(darkButton){

darkButton.onclick = ()=>{

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

};

}

// ======================================
// DASHBOARD DATA
// ======================================

function loadDashboardData(){

let employeeData =
JSON.parse(

localStorage.getItem(
"employeeData"
)

) || [];



let total =
employeeData.length;

let active = 0;

let inactive = 0;

let departmentList = [];



employeeData.forEach((employee)=>{

if(
employee.status==="Active"
){

active++;

}
else{

inactive++;

}


if(
!departmentList.includes(
employee.department
)
){

departmentList.push(
employee.department
);

}

});



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

// ======================================
// RECENT EMPLOYEES
// ======================================

function loadRecentEmployees(){

let employeeData =
JSON.parse(

localStorage.getItem(
"employeeData"
)

) || [];


let container =
document.getElementById(
"recentEmployees"
);

if(!container){

return;

}

container.innerHTML =
"";



employeeData
.slice(-5)
.reverse()
.forEach((employee)=>{

container.innerHTML +=

`

<div class="recent-item">

<h4>

${employee.id}

-

${employee.name}

</h4>

<p>

${employee.department}

|

${employee.position}

</p>

</div>

`;

});

}

// ======================================
// RECENT ACTIVITY
// ======================================

function loadRecentActivity(){

let employeeData =
JSON.parse(

localStorage.getItem(
"employeeData"
)

) || [];


let container =
document.getElementById(
"recentActivity"
);

if(!container){

return;

}

container.innerHTML =
"";



employeeData
.slice(-5)
.reverse()
.forEach((employee)=>{

container.innerHTML +=

`

<div class="recent-item">

<p>

${employee.name}

added to

${employee.department}

department

</p>

</div>

`;

});

}

// ======================================
// LOGOUT
// ======================================

function logout(){

if(
confirm(
"Logout from NEXORA?"
)
){

sessionStorage.removeItem(
"isLoggedIn"
);

window.location.href =
"index.html";

}

}




// ======================================
// INITIALIZE
// ======================================

window.onload = ()=>{

loadDashboardData();

loadRecentEmployees();

loadRecentActivity();

console.log(

"NEXORA Dashboard Final Ready"

);

};
