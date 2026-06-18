// ======================================
// NEXORA EMPLOYEE MODULE
// ======================================

protectPage();



// ======================================
// ELEMENT
// ======================================

const employeeTable =
document.querySelector(
".employee-table tbody"
);

const searchInput =
document.getElementById(
"searchEmployee"
);


// ADD MODAL

const addModal =
document.querySelector(
".modal"
);

const addButton =
document.querySelector(
".add-btn"
);

const closeButton =
document.querySelector(
".close-modal"
);

const cancelButton =
document.querySelector(
".cancel-btn"
);

const saveButton =
document.querySelector(
".save-btn"
);




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
// CLOSE ADD MODAL
// ======================================

if(closeButton){

closeButton.onclick = ()=>{

addModal.style.display =
"none";

};

}


if(cancelButton){

cancelButton.onclick = ()=>{

addModal.style.display =
"none";

};

}




// ======================================
// SAVE EMPLOYEE
// ======================================

if(saveButton){

saveButton.onclick = ()=>{

let employeeID =
document.getElementById(
"employeeID"
).value;

let employeeName =
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

employeeID==="" ||

employeeName==="" ||

department==="" ||

position===""

){

alert(
"Please complete all fields."
);

return;

}



let statusClass =
status==="Active"
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

<td>${employeeID}</td>

<td>${employeeName}</td>

<td>${department}</td>

<td>${position}</td>

<td>

<span class="status ${statusClass}">

${status}

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

employeeTable.appendChild(
row
);


saveEmployees();

updateStatistics();

clearForm();

addModal.style.display =
"none";

};

}




// ======================================
// CLEAR FORM
// ======================================

function clearForm(){

document.getElementById(
"employeeID"
).value = "";

document.getElementById(
"employeeName"
).value = "";

document.getElementById(
"department"
).value = "";

document.getElementById(
"position"
).value = "";

document.getElementById(
"status"
).selectedIndex = 0;

}

// ======================================
// VIEW MODAL
// ======================================

const viewModal =
document.querySelector(
".view-modal"
);

const closeViewButton =
document.querySelector(
".close-view-btn"
);

const closeViewIcon =
document.querySelector(
".close-view-modal"
);




// ======================================
// EDIT MODAL
// ======================================

const editModal =
document.querySelector(
".edit-modal"
);

const updateButton =
document.querySelector(
".update-btn"
);

const cancelEditButton =
document.querySelector(
".cancel-edit-btn"
);

const closeEditButton =
document.querySelector(
".close-edit-modal"
);

let currentRow = null;




// ======================================
// TABLE BUTTON EVENT
// ======================================

document.addEventListener(
"click",(e)=>{


// DELETE

if(
e.target.classList.contains(
"delete-btn"
)
){

let confirmDelete =
confirm(
"Delete this employee?"
);

if(confirmDelete){

e.target
.parentElement
.parentElement
.remove();

saveEmployees();

updateStatistics();

}

}



// VIEW

if(
e.target.classList.contains(
"view-btn"
)
){

let row =
e.target
.parentElement
.parentElement;


document.getElementById(
"employee-id-detail"
).innerHTML =
row.cells[0].innerText;


document.getElementById(
"employee-name-detail"
).innerHTML =
row.cells[1].innerText;


document.getElementById(
"employee-department-detail"
).innerHTML =
row.cells[2].innerText;


document.getElementById(
"employee-position-detail"
).innerHTML =
row.cells[3].innerText;


document.getElementById(
"employee-status-detail"
).innerHTML =
row.cells[4].innerText;


viewModal.style.display =
"flex";

}



// EDIT

if(
e.target.classList.contains(
"edit-btn"
)
){

currentRow =
e.target
.parentElement
.parentElement;


document.getElementById(
"edit-id"
).value =
currentRow.cells[0].innerText;


document.getElementById(
"edit-name"
).value =
currentRow.cells[1].innerText;


document.getElementById(
"edit-department"
).value =
currentRow.cells[2].innerText;


document.getElementById(
"edit-position"
).value =
currentRow.cells[3].innerText;


document.getElementById(
"edit-status"
).value =
currentRow.cells[4]
.innerText
.trim();


editModal.style.display =
"flex";

}

});




// ======================================
// CLOSE VIEW MODAL
// ======================================

if(closeViewButton){

closeViewButton.onclick = ()=>{

viewModal.style.display =
"none";

};

}


if(closeViewIcon){

closeViewIcon.onclick = ()=>{

viewModal.style.display =
"none";

};

}




// ======================================
// CLOSE EDIT MODAL
// ======================================

if(cancelEditButton){

cancelEditButton.onclick = ()=>{

editModal.style.display =
"none";

};

}


if(closeEditButton){

closeEditButton.onclick = ()=>{

editModal.style.display =
"none";

};

}

// ======================================
// UPDATE EMPLOYEE
// ======================================

if(updateButton){

updateButton.onclick = ()=>{

if(currentRow){

let status =
document.getElementById(
"edit-status"
).value;


let statusClass =
status==="Active"
?

"active-status"

:

"inactive-status";



currentRow.cells[0].innerText =
document.getElementById(
"edit-id"
).value;


currentRow.cells[1].innerText =
document.getElementById(
"edit-name"
).value;


currentRow.cells[2].innerText =
document.getElementById(
"edit-department"
).value;


currentRow.cells[3].innerText =
document.getElementById(
"edit-position"
).value;


currentRow.cells[4].innerHTML =

`

<span class="status ${statusClass}">

${status}

</span>

`;


saveEmployees();

updateStatistics();

editModal.style.display =
"none";

}

};

}




// ======================================
// SEARCH EMPLOYEE
// ======================================

if(searchInput){

searchInput.addEventListener(
"keyup",()=>{

let keyword =
searchInput.value
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
// LOCAL STORAGE
// ======================================

function saveEmployees(){

localStorage.setItem(

"employeeData",

employeeTable.innerHTML

);

}



function loadEmployees(){

let savedData =
localStorage.getItem(
"employeeData"
);

if(savedData){

employeeTable.innerHTML =
savedData;

}

}




// ======================================
// STATISTICS
// ======================================

function updateStatistics(){

let rows =
document.querySelectorAll(
".employee-table tbody tr"
);

let total = rows.length;

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
department);

}

});



document.getElementById(
"totalEmployeeCount"
).innerHTML =
total;


document.getElementById(
"activeEmployeeCount"
).innerHTML =
active;


document.getElementById(
"inactiveEmployeeCount"
).innerHTML =
inactive;


document.getElementById(
"departmentCount"
).innerHTML =
departmentList.length;

}




// ======================================
// CLICK OUTSIDE MODAL
// ======================================

window.onclick = (e)=>{

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

};




// ======================================
// INITIALIZE
// ======================================

loadEmployees();

updateStatistics();




// ======================================
// MODULE READY
// ======================================

console.log(

"NEXORA Employee Module V2 Ready"

);
