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

const searchInput =
document.querySelector(
".search-box input"
);




// ======================================
// OPEN MODAL
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

const inputs =
document.querySelectorAll(
".form-group input"
);

const selects =
document.querySelectorAll(
".form-group select"
);

let employeeID =
inputs[0].value;

let employeeName =
inputs[1].value;

let department =
selects[0].value;

let position =
inputs[2].value;

let status =
selects[1].value;

if(

employeeID==="" ||

employeeName==="" ||

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

addModal.style.display =
"none";


inputs[0].value = "";

inputs[1].value = "";

inputs[2].value = "";

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

let data =
localStorage.getItem(
"employeeData"
);

if(data){

employeeTable.innerHTML =
data;

}

}

loadEmployees();

// ======================================
// DELETE EMPLOYEE
// ======================================

document.addEventListener(
"click",(e)=>{

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

});




// ======================================
// VIEW MODAL
// ======================================

const viewModal =
document.querySelector(
".view-modal"
);

const closeViewModal =
document.querySelector(
".close-view-modal"
);

const closeViewButton =
document.querySelector(
".close-view-btn"
);




// ======================================
// OPEN VIEW MODAL
// ======================================

document.addEventListener(
"click",(e)=>{

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

});




// ======================================
// CLOSE VIEW MODAL
// ======================================

if(closeViewModal){

closeViewModal.onclick = ()=>{

viewModal.style.display =
"none";

};

}


if(closeViewButton){

closeViewButton.onclick = ()=>{

viewModal.style.display =
"none";

};

}




// ======================================
// EDIT MODAL
// ======================================

const editModal =
document.querySelector(
".edit-modal"
);

const closeEditModal =
document.querySelector(
".close-edit-modal"
);

const cancelEditButton =
document.querySelector(
".cancel-edit-btn"
);

const updateButton =
document.querySelector(
".update-btn"
);

let currentRow = null;




// ======================================
// OPEN EDIT MODAL
// ======================================

document.addEventListener(
"click",(e)=>{

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
// CLOSE EDIT MODAL
// ======================================

if(closeEditModal){

closeEditModal.onclick = ()=>{

editModal.style.display =
"none";

};

}


if(cancelEditButton){

cancelEditButton.onclick = ()=>{

editModal.style.display =
"none";

};

}

// ======================================
// EMPLOYEE STATISTICS
// ======================================

function updateStatistics(){

let rows =
document.querySelectorAll(
".employee-table tbody tr"
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



let totalCard =
document.getElementById(
"totalEmployeeCount"
);

let activeCard =
document.getElementById(
"activeEmployeeCount"
);

let inactiveCard =
document.getElementById(
"inactiveEmployeeCount"
);

let departmentCard =
document.getElementById(
"departmentCount"
);



if(totalCard){

totalCard.innerHTML =
total;

}


if(activeCard){

activeCard.innerHTML =
active;

}


if(inactiveCard){

inactiveCard.innerHTML =
inactive;

}


if(departmentCard){

departmentCard.innerHTML =
departmentList.length;

}

}




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

updateStatistics();




// ======================================
// MODULE READY
// ======================================

console.log(

"NEXORA Employee Module Ready"

);
