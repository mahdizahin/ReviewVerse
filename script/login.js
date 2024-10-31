function login(event) {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const mailtxt = email.value;
    const passtxt = password.value;
    if(mailtxt === "admin@gmail.com" && passtxt === "pass")
    {
        window.location.href = "homepage.html"
    }
    else{alert("wrong passwrod or email");event.preventDefault();
    }
}
