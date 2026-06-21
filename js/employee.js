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
