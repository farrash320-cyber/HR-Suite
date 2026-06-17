// =============================
// NEXORA SESSION MANAGEMENT
// =============================


// Jika user sudah login dan sedang berada di index.html,
// langsung arahkan ke dashboard.

if (
    sessionStorage.getItem("isLoggedIn") === "true"
    &&
    window.location.pathname.includes("index.html")
) {

    window.location.href = "dashboard.html";

}


// =============================
// PROTECT PAGE
// =============================

function protectPage() {

    let loginStatus =
    sessionStorage.getItem("isLoggedIn");

    if (loginStatus !== "true") {

        window.location.href = "index.html";

    }

}


// =============================
// LOGOUT
// =============================

function logout() {

    sessionStorage.removeItem(
        "isLoggedIn"
    );

    window.location.href =
    "index.html";

}
