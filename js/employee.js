// ======================================
// NEXORA EMPLOYEE MODULE
// ======================================


// ======================================
// SESSION PROTECTION
// ======================================

protectPage();




// ======================================
// MODAL
// ======================================

const modal =
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




// ======================================
// OPEN MODAL
// ======================================

if(addButton){

addButton.addEventListener(
"click",()=>{

modal.style.display =
"flex";

});

}




// ======================================
// CLOSE MODAL
// ======================================

if(closeButton){

closeButton.addEventListener(
"click",()=>{

modal.style.display =
"none";

});

}


if(cancelButton){

cancelButton.addEventListener(
"click",()=>{

modal.style.display =
"none";

});

}




// ======================================
// CLOSE WHEN CLICK OUTSIDE
// ======================================

window.addEventListener(
"click",(e)=>{

if(
e.target===modal
){

modal.style.display =
"none";

}

});




// ======================================
// READY
// ======================================

console.log(

"Employee Module Loaded"

);

// ======================================
// SAVE EMPLOYEE
// ======================================

const saveButton =
document.querySelector(
".save-btn"
);

const tableBody =
document.querySelector(
".employee-table tbody"
);

const employeeCards =
document.querySelectorAll(
".card h1"
);

let employeeCount = 125;

if(saveButton){

saveButton.addEventListener(
"click",()=>{

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


// ======================================
// STATUS CLASS
// ======================================

let statusClass =
status==="Active"
?

"active-status"

:

"inactive-status";


// ======================================
// CREATE ROW
// ======================================

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

tableBody.appendChild(
row
);


// ======================================
// UPDATE COUNTER
// ======================================

employeeCount++;

employeeCards[0].innerHTML =
employeeCount;


// ======================================
// RESET FORM
// ======================================

inputs[0].value = "";

inputs[1].value = "";

inputs[2].value = "";

selects[0].selectedIndex = 0;

selects[1].selectedIndex = 0;


// ======================================
// CLOSE MODAL
// ======================================

modal.style.display =
"none";

});

}

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

employeeCount--;

employeeCards[0].innerHTML =
employeeCount;

saveEmployees();

}

}

});




// ======================================
// VIEW EMPLOYEE
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

let employeeData =

`

Employee ID :

${row.cells[0].innerText}


Name :

${row.cells[1].innerText}


Department :

${row.cells[2].innerText}


Position :

${row.cells[3].innerText}


Status :

${row.cells[4].innerText}

`;

alert(
employeeData
);

}

});




// ======================================
// SEARCH EMPLOYEE
// ======================================

const searchInput =
document.querySelector(
".search-box input"
);

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

let name =
row.cells[1]
.innerText
.toLowerCase();

if(
name.includes(
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

"employeeTable",

tableBody.innerHTML

);

}




function loadEmployees(){

let savedData =
localStorage.getItem(
"employeeTable"
);

if(savedData){

tableBody.innerHTML =
savedData;

}

}


loadEmployees();




// ======================================
// SAVE AFTER ADD
// ======================================

if(saveButton){

saveButton.addEventListener(
"click",()=>{

saveEmployees();

});

}




// ======================================
// EMPLOYEE MODULE READY
// ======================================

console.log(

"NEXORA Employee Module Ready"

);

// ======================================
// VIEW EMPLOYEE MODAL
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


// GET DATA

let employeeID =
row.cells[0].innerText;

let employeeName =
row.cells[1].innerText;

let department =
row.cells[2].innerText;

let position =
row.cells[3].innerText;

let status =
row.cells[4].innerText;


// DISPLAY DATA

document.getElementById(
"employee-id-detail"
).innerHTML =
employeeID;


document.getElementById(
"employee-name-detail"
).innerHTML =
employeeName;


document.getElementById(
"employee-department-detail"
).innerHTML =
department;


document.getElementById(
"employee-position-detail"
).innerHTML =
position;


document.getElementById(
"employee-status-detail"
).innerHTML =
status;


// SHOW MODAL

viewModal.style.display =
"flex";

}

});




// ======================================
// CLOSE VIEW MODAL
// ======================================

if(closeViewModal){

closeViewModal.addEventListener(
"click",()=>{

viewModal.style.display =
"none";

});

}


if(closeViewButton){

closeViewButton.addEventListener(
"click",()=>{

viewModal.style.display =
"none";

});

}




// ======================================
// CLICK OUTSIDE TO CLOSE
// ======================================

window.addEventListener(
"click",(e)=>{

if(
e.target===viewModal
){

viewModal.style.display =
"none";

}

});

// ======================================
// EDIT EMPLOYEE MODAL
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


// LOAD DATA

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


let status =
currentRow.cells[4]
.innerText
.trim();

document.getElementById(
"edit-status"
).value =
status;


// OPEN MODAL

editModal.style.display =
"flex";

}

});




// ======================================
// UPDATE EMPLOYEE
// ======================================

if(updateButton){

updateButton.addEventListener(
"click",()=>{

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



// UPDATE TABLE

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



// SAVE LOCAL STORAGE

saveEmployees();



// CLOSE MODAL

editModal.style.display =
"none";

}

});

}




// ======================================
// CLOSE EDIT MODAL
// ======================================

if(closeEditModal){

closeEditModal.addEventListener(
"click",()=>{

editModal.style.display =
"none";

});

}


if(cancelEditButton){

cancelEditButton.addEventListener(
"click",()=>{

editModal.style.display =
"none";

});

}




// ======================================
// CLICK OUTSIDE TO CLOSE
// ======================================

window.addEventListener(
"click",(e)=>{

if(
e.target===editModal
){

editModal.style.display =
"none";

}

});
