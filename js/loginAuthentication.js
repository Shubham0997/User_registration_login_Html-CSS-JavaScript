let FullName=localStorage.getItem('FullName')?localStorage.getItem('FullName'):''
console.log(FullName);
if(FullName!='')
{
  alert("You're loggen in, Please visit your profile");
  window.location.href="profile.html";
}

function loginAuthentication(){



    let username = document.forms["signin"]["username"].value;
    let password = document.forms["signin"]["password"].value;

    let user_records = new Array();
    user_records=JSON.parse(localStorage.getItem("Users"))?JSON.parse(localStorage.getItem("Users")):[]

    if(user_records.some((v)=>{return v.Username==username && v.Password==password})){
  
        let current_user= user_records.filter((v)=>{return v.Username==username && v.Password==password})[0]
        

        localStorage.setItem('FullName',current_user.FullName);
        localStorage.setItem('email',current_user.email);
        localStorage.setItem('PhoneNumber',current_user.PhoneNumber);
        localStorage.setItem('Gender',current_user.Gender);
        localStorage.setItem('Username',current_user.Username);
        window.location.href="profile.html";
    }else{
        alert("Username or password incorrect!");
    }
}