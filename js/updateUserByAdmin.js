
var updateID; //index of user to updated by the admin
function openForm(index) {
    this.updateID= index; //setting value of index to a global variable
  document.getElementById("myForm").style.display = "block"; //opening popup form to update user by admin
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

var counterForUpdatedValues=0;//number of fields updated by the admin

if(fullName!=''){ //if name is being updated
    user_records[index].FullName=fullName;
    localStorage.setItem("Users",JSON.stringify(user_records));
    counterForUpdatedValues++;//number of fields updated by the admin incremented
    }

if(email!=''){ // if email is being updated
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    user_records[index].email=email;
    localStorage.setItem("Users",JSON.stringify(user_records));
    counterForUpdatedValues++;
  }else{
    window.alert("Enter a valid Email address");
  }

    }

if(phoneNumber!=''){ //if phone number is being updated
    if (phoneNumber.length != 10) {//check for number validation
        window.alert("Enter a valid phone number");
        return false;
      }else{
    user_records[index].PhoneNumber=phoneNumber;
    localStorage.setItem("Users",JSON.stringify(user_records));
    counterForUpdatedValues++;
      }
    }

if(gender!=''){//if gender is being updated
    user_records[index].Gender=gender;
    localStorage.setItem("Users",JSON.stringify(user_records));
    counterForUpdatedValues++;
    }

if(username!=''){ // if username is being updated
    if(user_records.some((v)=>{return v.Username==username})){
        window.alert("Username already exists.");
    }else{
    user_records[index].Username=username;
    localStorage.setItem("Users",JSON.stringify(user_records));
    counterForUpdatedValues++;
    }
    }

   
    if(counterForUpdatedValues>0){
      window.alert(counterForUpdatedValues +" fields Updated Successfully")
      document.location.reload(true);
    }
    
}

function closeForm() { //function to close the popup form to update user values
  document.getElementById("myForm").style.display = "none";
}