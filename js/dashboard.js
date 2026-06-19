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

let options = {

hour:"2-digit",

minute:"2-digit",

second:"2-digit"

};

document.getElementById(
"clock"
).innerHTML =

now.toLocaleTimeString(
[],
options
);

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
"";

if(hour<12){

greeting =
"Good Morning, Admin";

}
else if(hour<18){

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


if(darkButton){

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

}




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

const notification =
document.querySelector(
".notification"
);

const notificationPanel =
document.querySelector(
".notification-panel"
);




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




if(
notification &&
notificationPanel
){

notification.addEventListener(
"click",()=>{

if(

notificationPanel.style.display==="block"

){

notificationPanel.style.display =
"none";

}
else{

notificationPanel.style.display =
"block";

if(dropdown){

dropdown.style.display =
"none";

}

}

});

}




if(
profile &&
dropdown
){

profile.addEventListener(
"click",()=>{

if(

dropdown.style.display==="block"

){

dropdown.style.display =
"none";

}
else{

dropdown.style.display =
"block";

if(notificationPanel){

notificationPanel.style.display =
"none";

}

}

});

}




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
// SEARCH FUNCTION
// ======================================

const searchInput =
document.getElementById(
"searchInput"
);

if(searchInput){

searchInput.addEventListener(
"keypress",(e)=>{

if(
e.key==="Enter"
){

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


let recentContainer =
document.getElementById(
"recentEmployees"
);


if(!recentContainer){

return;

}


recentContainer.innerHTML =
"";



if(employeeData.length===0){

recentContainer.innerHTML =

`

<p>

No employee data.

</p>

`;

return;

}



let latestEmployees =
employeeData.slice(-5).reverse();



latestEmployees.forEach((employee)=>{

recentContainer.innerHTML +=

`

<div class="recent-item">

<h4>

${employee.id} - ${employee.name}

</h4>

<p>

${employee.department} | ${employee.position}

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


let activityContainer =
document.getElementById(
"recentActivity"
);


if(!activityContainer){

return;

}


activityContainer.innerHTML =
"";



if(employeeData.length===0){

activityContainer.innerHTML =

`

<p>

No activity.

</p>

`;

return;

}



let latestActivity =
employeeData.slice(-5).reverse();



latestActivity.forEach((employee)=>{

activityContainer.innerHTML +=

`

<div class="recent-item">

<p>

${employee.name}

added to

${employee.department}

department.

</p>

</div>

`;

});

}




// ======================================
// DASHBOARD INITIALIZATION
// ======================================

window.onload = ()=>{

loadDashboardData();

loadRecentEmployees();

loadRecentActivity();

console.log(

"NEXORA Human Resource Suite Ready"

);

};




// ======================================
// DASHBOARD READY
// ======================================

console.log(

"NEXORA Dashboard Final Sync Ready"

);

// ======================================
// LOCAL STORAGE
// ======================================

function getEmployeeArray(){

let employeeArray = [];

let rows =
document.querySelectorAll(
".employee-table tbody tr"
);


rows.forEach((row)=>{

employeeArray.push({

id:
row.cells[0].innerText,

name:
row.cells[1].innerText,

department:
row.cells[2].innerText,

position:
row.cells[3].innerText,

status:
row.cells[4]
.innerText
.trim()

});

});


return employeeArray;

}




function saveEmployees(){

localStorage.setItem(

"employeeData",

JSON.stringify(

getEmployeeArray()

)

);

}




function loadEmployees(){

let employeeData =
JSON.parse(

localStorage.getItem(
"employeeData"

)

) || [];


tableBody.innerHTML = "";


employeeData.forEach((employee)=>{

let statusClass =

employee.status==="Active"

?

"active-status"

:

"inactive-status";


let row =
document.createElement(
"tr"
);


row.innerHTML =

`

<td>${employee.id}</td>

<td>${employee.name}</td>

<td>${employee.department}</td>

<td>${employee.position}</td>

<td>

<span class="status ${statusClass}">

${employee.status}

</span>

</td>

<td>

<button class="view-btn">

View

</button>

<button class="edit-btn">

Edit

</button>

<button class="delete-btn">

Delete

</button>

</td>

`;


tableBody.appendChild(
row);

});

}
