function login(){

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Demo Login
    if(username === "admin" && password === "admin123"){

        message.style.color = "green";
        message.innerText = "Login Successful...";

        setTimeout(()=>{
            window.location.href = "dashboard.html";
        },1000);

    }else{

        message.style.color = "red";
        message.innerText = "Invalid Username or Password";

    }

}
