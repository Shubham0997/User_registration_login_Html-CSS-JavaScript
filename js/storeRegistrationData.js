function updateDatabase () {
    let fullName= document.forms["signup"]["full_name"].value;
    let email=document.forms["signup"]["email"].value;
    let phoneNumber=document.forms["signup"]["number"].value;
    let gender = document.forms["signup"]["Gender"].value;
    let username = document.forms["signup"]["username"].value;
    let password = document.forms["signup"]["password"].value;


    let user_records= new Array();
    user_records=JSON.parse(localStorage.getItem("Users"))?JSON.parse(localStorage.getItem("Users")):[]


    if(user_records.some((v)=>{return v.Username==username})){
        window.alert("User already exists");
    }else{
        user_records.push({
            "Full Name":fullName,
            "email":email,
            "Phone Number":phoneNumber,
            "Gender":gender,
            "Username":username,
            "Password":password
        })
        localStorage.setItem("Users",JSON.stringify(user_records));
    }

}