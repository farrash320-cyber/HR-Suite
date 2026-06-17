// ===========================
// PROFILE DROPDOWN
// ===========================

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
