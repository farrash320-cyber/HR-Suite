// ======================================
// NEXORA EMPLOYEE FINAL
// ======================================

protectPage();




// ======================================
// ELEMENT
// ======================================

const tableBody =
document.querySelector(
".employee-table tbody"
);

const addModal =
document.querySelector(
".modal"
);

const viewModal =
document.querySelector(
".view-modal"
);

const editModal =
document.querySelector(
".edit-modal"
);




// ======================================
// BUTTON
// ======================================

const addButton =
document.querySelector(
".add-btn"
);

const saveButton =
document.querySelector(
".save-btn"
);

const updateButton =
document.querySelector(
".update-btn"
);




// ======================================
// DATABASE
// ======================================

let employeeData =
JSON.parse(

localStorage.getItem(
"employeeData"
)

) || [];



let selectedRow =
null;




// ======================================
// SAVE DATABASE
// ======================================

function saveDatabase(){

localStorage.setItem(

"employeeData",

JSON.stringify(
employeeData
)

);

}




// ======================================
// RENDER TABLE
// ======================================

function renderTable(){

tableBody.innerHTML =
"";


employeeData.forEach((employee)=>{

let statusClass =

employee.status==="Active"

?

"active-status"

:

"inactive-status";



tableBody.innerHTML +=

`

<tr>

<td>

${employee.id}

</td>

<td>

${employee.name}

</td>

<td>

${employee.department}

</td>

<td>

${employee.position}

</td>

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

</tr>

`;

});

}

// ======================================
// OPEN ADD MODAL
// ======================================

if(addButton){

addButton.onclick = ()=>{

addModal.style.display =
"flex";

};

}




// ======================================
// CLOSE MODAL
// ======================================

document.addEventListener(
"click",(e)=>{

if(
e.target.classList.contains(
"close-modal"
)
){

addModal.style.display =
"none";

}



if(
e.target.classList.contains(
"cancel-btn"
)
){

addModal.style.display =
"none";

}

});




// ======================================
// CLEAR FORM
// ======================================

function clearForm(){

document.getElementById(
"employeeID"
).value =
"";


document.getElementById(
"employeeName"
).value =
"";


document.getElementById(
"department"
).value =
"";


document.getElementById(
"position"
).value =
"";


document.getElementById(
"status"
).selectedIndex =
0;

}




// ======================================
// ADD EMPLOYEE
// ======================================

if(saveButton){

saveButton.onclick = ()=>{

let id =
document.getElementById(
"employeeID"
).value;


let name =
document.getElementById(
"employeeName"
).value;


let department =
document.getElementById(
"department"
).value;


let position =
document.getElementById(
"position"
).value;


let status =
document.getElementById(
"status"
).value;



if(

id==="" ||

name==="" ||

department==="" ||

position===""

){

alert(
"Please complete all fields."
);

return;

}




employeeData.push({

id:id,

name:name,

department:department,

position:position,

status:status

});



saveDatabase();

renderTable();

updateStatistics();

clearForm();

addModal.style.display =
"none";

};

}

// ======================================
// VIEW EMPLOYEE
// ======================================

document.addEventListener(
"click",(e)=>{

// VIEW

if(
e.target.classList.contains(
"view-btn"
)
){

let index =
e.target
.closest("tr")
.rowIndex - 1;

let employee =
employeeData[index];


document.getElementById(
"employee-id-detail"
).innerText =
employee.id;


document.getElementById(
"employee-name-detail"
).innerText =
employee.name;


document.getElementById(
"employee-department-detail"
).innerText =
employee.department;


document.getElementById(
"employee-position-detail"
).innerText =
employee.position;


document.getElementById(
"employee-status-detail"
).innerText =
employee.status;


viewModal.style.display =
"flex";

}



// EDIT

if(
e.target.classList.contains(
"edit-btn"
)
){

selectedRow =
e.target
.closest("tr")
.rowIndex - 1;


let employee =
employeeData[selectedRow];


document.getElementById(
"edit-id"
).value =
employee.id;


document.getElementById(
"edit-name"
).value =
employee.name;


document.getElementById(
"edit-department"
).value =
employee.department;


document.getElementById(
"edit-position"
).value =
employee.position;


document.getElementById(
"edit-status"
).value =
employee.status;


editModal.style.display =
"flex";

}



// DELETE

if(
e.target.classList.contains(
"delete-btn"
)
){

let index =
e.target
.closest("tr")
.rowIndex - 1;


let confirmDelete =
confirm(
"Delete this employee?"
);


if(confirmDelete){

employeeData.splice(
index,
1
);


saveDatabase();

renderTable();

updateStatistics();

}

}

});

// ======================================
// SEARCH EMPLOYEE
// ======================================

const searchEmployee =
document.getElementById(
"searchEmployee"
);

if(searchEmployee){

searchEmployee.addEventListener(
"keyup",()=>{

let keyword =
searchEmployee.value
.toLowerCase();

let rows =
document.querySelectorAll(
".employee-table tbody tr"
);

rows.forEach((row)=>{

let employeeName =
row.cells[1]
.innerText
.toLowerCase();

if(
employeeName.includes(
keyword
)
){

row.style.display =
"";

}
else{

row.style.display =
"none";

}

});

});

}




// ======================================
// STATISTICS
// ======================================

function updateStatistics(){

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
"totalEmployeeCount"
).innerText =
total;


document.getElementById(
"activeEmployeeCount"
).innerText =
active;


document.getElementById(
"inactiveEmployeeCount"
).innerText =
inactive;


document.getElementById(
"departmentCount"
).innerText =
departmentList.length;

}




// ======================================
// CLOSE MODAL
// ======================================

document.addEventListener(
"click",(e)=>{

if(
e.target.classList.contains(
"close-view-btn"
)
||

e.target.classList.contains(
"close-view-modal"
)
){

viewModal.style.display =
"none";

}



if(
e.target.classList.contains(
"cancel-edit-btn"
)
||

e.target.classList.contains(
"close-edit-modal"
)
){

editModal.style.display =
"none";

}

});




// ======================================
// CLICK OUTSIDE MODAL
// ======================================

window.addEventListener(
"click",(e)=>{

if(
e.target===addModal
){

addModal.style.display =
"none";

}


if(
e.target===viewModal
){

viewModal.style.display =
"none";

}


if(
e.target===editModal
){

editModal.style.display =
"none";

}

});




// ======================================
// INITIALIZE
// ======================================

renderTable();

updateStatistics();




// ======================================
// MODULE READY
// ======================================

console.log(

"NEXORA Employee Final Ready"

);
