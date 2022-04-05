
var updateID; //index of user to updated by the admin
function openForm(index) {
    this.updateID= index; //setting value of index to a global variable
  document.getElementById("myForm").style.display = "block"; //opening popup form to update user by admin



  var blur2 =document.getElementById('searchUser');
  blur2.classList.toggle('activeForm')


  user_records=JSON.parse(localStorage.getItem("Users")) ? JSON.parse(localStorage.getItem("Users")) : [] //putting data from User array into user_records

  document.getElementById("full_name").defaultValue = user_records[updateID].FullName;
  document.getElementById("email").defaultValue = user_records[updateID].email;
  document.getElementById("number").defaultValue = user_records[updateID].PhoneNumber;
  document.getElementById("username").defaultValue = user_records[updateID].Username;

  document.getElementById("editDetails").disabled = true;

  $(document).ready(function() {
    $('.form-popup',).on('input change', function() {
       
            $('#editDetails').prop('disabled', false);
    });
});




}

function updateUser(){
    var index=updateID;
let fullName= document.forms["updateUserByAdmin"]["full_name"].value;
let email=document.forms["updateUserByAdmin"]["email"].value;
let phoneNumber=document.forms["updateUserByAdmin"]["number"].value;
let username = document.forms["updateUserByAdmin"]["username"].value;


let user_records= new Array();
user_records=JSON.parse(localStorage.getItem("Users"))?JSON.parse(localStorage.getItem("Users")):[] 

var counterForUpdatedValues=0;//number of fields updated by the admin

if(fullName != ''){ //if name is being updated
  if(fullName != user_records[updateID].FullName){
    user_records[index].FullName=fullName;
    localStorage.setItem("Users",JSON.stringify(user_records));
    counterForUpdatedValues++;//number of fields updated by the admin incremented
    }
  }



if(email != ''){ // if email is being updated
  if(email!=user_records[updateID].email){
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    user_records[index].email=email;
    localStorage.setItem("Users",JSON.stringify(user_records));
    counterForUpdatedValues++;
  }else{
    window.alert("Enter a valid Email address");
  }
}
}

if( phoneNumber!=''){ //if phone number is being updated
  if(phoneNumber!= user_records[updateID].PhoneNumber){
    if (phoneNumber.length != 10) {//check for number validation
        window.alert("Enter a valid phone number");
        return false;
      }else{
    user_records[index].PhoneNumber=phoneNumber;
    localStorage.setItem("Users",JSON.stringify(user_records));
    counterForUpdatedValues++;
      }
    }
}


if( username!=''){ // if username is being updated
  if(username!= user_records[updateID].Username){
    if(user_records.some((v)=>{return v.Username==username})){
        window.alert("Username already exists.");
    }else{
    user_records[index].Username=username;
    localStorage.setItem("Users",JSON.stringify(user_records));
    counterForUpdatedValues++;
    }
    }
  }
   
    if(counterForUpdatedValues>0){
      window.alert(counterForUpdatedValues +" fields Updated Successfully")
      document.location.reload(true);
    }
    
}

function closeForm() { //function to close the popup form to update user values
  document.getElementById("myForm").style.display = "none";
  var blur2 =document.getElementById('searchUser');
  blur2.classList.toggle('activeForm')
}