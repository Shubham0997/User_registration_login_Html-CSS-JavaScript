var updateID;
function openForm(index) {
    this.updateID= index;
  document.getElementById("myForm").style.display = "block";
}

function updateUser(){
    var index=updateID;
let fullName= document.forms["updateUserByAdmin"]["full_name"].value;
let email=document.forms["updateUserByAdmin"]["email"].value;
let phoneNumber=document.forms["updateUserByAdmin"]["number"].value;
let gender = document.forms["updateUserByAdmin"]["Gender"].value;
let username = document.forms["updateUserByAdmin"]["username"].value;


let user_records= new Array();
user_records=JSON.parse(localStorage.getItem("Users"))?JSON.parse(localStorage.getItem("Users")):[] 

if(fullName!=''){ //if name is being updated
    user_records[index].FullName=fullName;
    localStorage.setItem("Users",JSON.stringify(user_records));
    }

if(email!=''){ // if email is being updated
    user_records[index].email=email;
    localStorage.setItem("Users",JSON.stringify(user_records));
    }

if(phoneNumber!=''){ //if phone number is being updated
    if (phoneNumber.length != 10) {//check for number validation
        window.alert("Enter a valid phone number");
        return false;
      }else{
    user_records[index].PhoneNumber=phoneNumber;
    localStorage.setItem("Users",JSON.stringify(user_records));
      }
    }

if(gender!=''){//if gender is being updated
    user_records[index].Gender=gender;
    localStorage.setItem("Users",JSON.stringify(user_records));
    }

if(username!=''){ // if username is being updated
    if(user_records.some((v)=>{return v.Username==username})){
        window.alert("Username already exists.");
    }else{
    user_records[index].Username=username;
    localStorage.setItem("Users",JSON.stringify(user_records));
    }
    }
    document.location.reload(true);
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}