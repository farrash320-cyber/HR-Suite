// ======================================
// NEXORA EMPLOYEE FINAL
// ======================================

protectPage();




// ======================================
// DATABASE
// ======================================

let employeeData =
JSON.parse(

localStorage.getItem(
"employeeData"
)

) || [];



let selectedIndex =
null;




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
// SAVE DATABASE
// ======================================

function saveDatabase(){

    localStorage.setItem(
        "employeeData",
        JSON.stringify(employeeData)
    );

}

// ======================================
// GENERATE EMPLOYEE ID
// ======================================

function generateEmployeeID(){

    if(employeeData.length === 0){
        return "EMP-0001";
    }

    const numbers = employeeData.map(employee => {
        const match = employee.id.match(/\d+/);
        return match ? parseInt(match[0], 10) : 0;
    });

    const nextNumber = Math.max(...numbers) + 1;

    return `EMP-${String(nextNumber).padStart(4, "0")}`;

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

        clearForm();

        document.getElementById("employeeID").value =
            generateEmployeeID();

        addModal.style.display = "flex";

    };

}




// ======================================
// CLOSE ADD MODAL
// ======================================

document.addEventListener(
"click",(e)=>{

if(
e.target.classList.contains(
"close-modal"
)
||

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

    document.getElementById("employeeName").value = "";

    document.getElementById("department").value = "";

    document.getElementById("position").value = "";

    document.getElementById("status").selectedIndex = 0;

}




// ======================================
// ADD EMPLOYEE
// ======================================

if(saveButton){

saveButton.onclick = ()=>{

let id =
document.getElementById(
"employeeID"
).value.trim();


let name =
document.getElementById(
"employeeName"
).value.trim();


let department =
document.getElementById(
"department"
).value.trim();


let position =
document.getElementById(
"position"
).value.trim();


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

showToast(
    "Please complete all fields.",
    "warning"
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

showToast(
    "Employee added successfully!",
    "success"
);

clearForm();

addModal.style.display = "none";

};

}

// ======================================
// TABLE ACTION
// ======================================

document.addEventListener(
"click",(e)=>{


// ======================================
// VIEW
// ======================================

if(
e.target.classList.contains(
"view-btn"
)
){

selectedIndex =
e.target
.closest("tr")
.rowIndex - 1;


let employee =
employeeData[selectedIndex];


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




// ======================================
// EDIT
// ======================================

if(
e.target.classList.contains(
"edit-btn"
)
){

selectedIndex =
e.target
.closest("tr")
.rowIndex - 1;


let employee =
employeeData[selectedIndex];


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




// ======================================
// DELETE
// ======================================

if(
e.target.classList.contains(
"delete-btn"
)
){

let index =
e.target
.closest("tr")
.rowIndex - 1;


if(
confirm(
"Delete this employee?"
)
){

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
// UPDATE EMPLOYEE
// ======================================

if(updateButton){

updateButton.onclick = ()=>{

if(
selectedIndex!==null
){

employeeData[selectedIndex] = {

id:
document.getElementById(
"edit-id"
).value,

name:
document.getElementById(
"edit-name"
).value,

department:
document.getElementById(
"edit-department"
).value,

position:
document.getElementById(
"edit-position"
).value,

status:
document.getElementById(
"edit-status"
).value

};




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
// CLOSE VIEW MODAL
// ======================================

document.querySelector(
".close-view-btn"
).onclick = ()=>{

viewModal.style.display =
"none";

};


document.querySelector(
".close-view-modal"
).onclick = ()=>{

viewModal.style.display =
"none";

};




// ======================================
// CLOSE EDIT MODAL
// ======================================

document.querySelector(
".cancel-edit-btn"
).onclick = ()=>{

editModal.style.display =
"none";

};


document.querySelector(
".close-edit-modal"
).onclick = ()=>{

editModal.style.display =
"none";

};

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

renderTable();

updateStatistics();




// ======================================
// MODULE READY
// ======================================

console.log(

"NEXORA Employee Final Ready"

);
