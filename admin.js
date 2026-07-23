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
// ===========================
// PART-7 : SAVE, EDIT & DELETE
// ===========================

let news = JSON.parse(localStorage.getItem("news")) || [];

function saveNews(){
    localStorage.setItem("news", JSON.stringify(news));
}

function showNews(){

    const newsList = document.getElementById("newsList");

    if(!newsList) return;

    newsList.innerHTML="";

    news.forEach((item,index)=>{

        newsList.innerHTML += `
        <div class="card" style="margin-top:20px;">
            <h3>${item.title}</h3>
            <p>${item.description}</p>

            <button onclick="editNews(${index})">Edit</button>

            <button onclick="deleteNews(${index})">Delete</button>
        </div>
        `;

    });

}

function addNews(){

    const title=document.getElementById("newsTitle").value;
    const description=document.getElementById("newsDescription").value;

    if(title==="" || description===""){
        alert("Fill all fields");
        return;
    }

    news.push({
        title,
        description
    });

    saveNews();
    showNews();

    document.getElementById("newsTitle").value="";
    document.getElementById("newsDescription").value="";
}

function deleteNews(index){

    news.splice(index,1);

    saveNews();

    showNews();

}

function editNews(index){

    document.getElementById("newsTitle").value=news[index].title;

    document.getElementById("newsDescription").value=news[index].description;

    news.splice(index,1);

    saveNews();

    showNews();

}

window.onload=showNews;
.news-form button{
    margin-right:10px;
}

#newsList button{
    margin:8px 5px 0 0;
    padding:8px 15px;
    border:none;
    border-radius:6px;
    cursor:pointer;
}

#newsList button:first-child{
    background:#2563eb;
    color:#fff;
}

#newsList button:last-child{
    background:#dc2626;
    color:#fff;
    }
// ===========================
// PART-9 : SCHEMES MANAGEMENT
// ===========================

let schemes = JSON.parse(localStorage.getItem("schemes")) || [];

function saveSchemes(){
    localStorage.setItem("schemes", JSON.stringify(schemes));
}

function showSchemes(){

    const schemeList = document.getElementById("schemeList");

    if(!schemeList) return;

    schemeList.innerHTML = "";

    schemes.forEach((item,index)=>{

        schemeList.innerHTML += `
        <div class="card" style="margin-top:20px;">
            <h3>${item.title}</h3>
            <p>${item.description}</p>

            <button onclick="deleteScheme(${index})">Delete</button>
        </div>
        `;

    });

}

function addScheme(){

    const title = document.getElementById("schemeTitle").value;
    const description = document.getElementById("schemeDescription").value;

    if(title==="" || description===""){
        alert("Fill all fields");
        return;
    }

    schemes.push({title,description});

    saveSchemes();
    showSchemes();

    document.getElementById("schemeTitle").value="";
    document.getElementById("schemeDescription").value="";
}

function deleteScheme(index){

    schemes.splice(index,1);

    saveSchemes();

    showSchemes();

}

window.addEventListener("load", showSchemes);
