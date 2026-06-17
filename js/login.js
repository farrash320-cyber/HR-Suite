// ============================
// ELEMENT
// ============================

const loginForm = document.getElementById("loginForm");

const usernameInput = document.getElementById("username");

const passwordInput = document.getElementById("password");

const togglePassword =
document.getElementById("togglePassword");

const errorMessage =
document.getElementById("error-message");

const rememberMe =
document.getElementById("remember");


// ============================
// SHOW / HIDE PASSWORD
// ============================

togglePassword.addEventListener("click",()=>{

    if(passwordInput.type==="password"){

        passwordInput.type="text";

        togglePassword.classList.remove("fa-eye");

        togglePassword.classList.add("fa-eye-slash");

    }
    else{

        passwordInput.type="password";

        togglePassword.classList.remove("fa-eye-slash");

        togglePassword.classList.add("fa-eye");

    }

});


// ============================
// LOAD REMEMBER ME
// ============================

window.addEventListener("load",()=>{

    let savedUser =
    localStorage.getItem("rememberUsername");

    if(savedUser){

        usernameInput.value = savedUser;

        rememberMe.checked = true;

    }

});


// ============================
// LOGIN
// ============================

loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    errorMessage.innerHTML="";

    let username =
    usernameInput.value.trim();

    let password =
    passwordInput.value.trim();


    // VALIDASI KOSONG

    if(username===""){

        errorMessage.innerHTML =
        "Username cannot be empty.";

        return;

    }

    if(password===""){

        errorMessage.innerHTML =
        "Password cannot be empty.";

        return;

    }


    // ACCOUNT DEMO

    if(
        username==="admin"
        &&
        password==="12345"
    ){

        // Remember Me

        if(rememberMe.checked){

            localStorage.setItem(
                "rememberUsername",
                username
            );

        }
        else{

            localStorage.removeItem(
                "rememberUsername"
            );

        }


        // SESSION LOGIN

        sessionStorage.setItem(
            "isLoggedIn",
            "true"
        );


        // LOADING

        let button =
        document.querySelector(".login-btn");

        button.innerHTML =
        "Logging in...";

        button.disabled = true;


        setTimeout(()=>{

            window.location.href =
            "dashboard.html";

        },1000);

    }

    else{

        errorMessage.innerHTML =
        "Invalid username or password.";

    }

});
