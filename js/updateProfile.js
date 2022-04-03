

// this javascript page contains  edit/update profile functionality

//update the profile
function updateProfile(){
    //getting values from the form
    let fullName= document.forms["update"]["full_name"].value;
    let email=document.forms["update"]["email"].value;
    let phoneNumber=document.forms["update"]["number"].value;
    let gender = document.forms["update"]["Gender"].value;
    let username = document.forms["update"]["username"].value;
    let password = document.forms["update"]["password"].value;
    let localUsername=localStorage.getItem('Username')?localStorage.getItem('Username'):''

    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;


    let user_records= new Array();
    user_records=JSON.parse(localStorage.getItem("Users"))?JSON.parse(localStorage.getItem("Users")):[] 
    const index = user_records.findIndex(user_records => user_records.Username == localUsername);//getting index of the user 
    console.log(localUsername)
    console.log(index)
   
    if(fullName!=''){ //if name is being updated
        user_records[index].FullName=fullName;
        localStorage.setItem("Users",JSON.stringify(user_records));
        localStorage.setItem('FullName',fullName);
        }
    
    if(email!=''){ // if email is being updated
        user_records[index].email=email;
        localStorage.setItem("Users",JSON.stringify(user_records));
        localStorage.setItem('email',email);
        }
    
    if(phoneNumber!=''){ //if phone number is being updated
        if (phoneNumber.length != 10) {//check for number validation
            window.alert("Enter a valid phone number");
            return false;
          }else{
        user_records[index].PhoneNumber=phoneNumber;
        localStorage.setItem("Users",JSON.stringify(user_records));
        localStorage.setItem('PhoneNumber',phoneNumber);
          }
        }
    
    if(gender!=''){//if gender is being updated
        user_records[index].Gender=gender;
        localStorage.setItem("Users",JSON.stringify(user_records));
        localStorage.setItem('Gender',gender);
        }

    if(username!=''){ // if username is being updated
        if(user_records.some((v)=>{return v.Username==username})){
            window.alert("Username already exists.");
        }else{
        user_records[index].Username=username;
        localStorage.setItem("Users",JSON.stringify(user_records));
        localStorage.setItem('Username',username);
        }
        }

    if(password!=''){ //if password is being updated

        if(!regularExpression.test(password)) { //cheking for password validation
            alert("Password should contain atleast one number, one special character and must have 8-16 characters.");
            return false;
        }else{
        user_records[index].Password=password;
        localStorage.setItem("Users",JSON.stringify(user_records));
        }
        }
}
