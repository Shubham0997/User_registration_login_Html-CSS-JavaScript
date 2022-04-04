// this javascript page handles user,admin registration functionality

let userType="";// user type , either admin or user
function setUserType(){  //will be executed only by adminRegistration
    userType="Admin";
    validateSignupForm();
}

//validated phone number and password
function validateSignupForm() {
  
    let phoneNumber= document.forms["signup"]["number"].value;
    let password=document.forms["signup"]["password"].value;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
 
    if (phoneNumber.length != 10) {
      window.alert("Enter a valid phone number");
      return false;
    }

    if(!regularExpression.test(password)) {
        alert("Password should contain atleast one number, one special character and must have 8-16 characters.");
        return false;
    }

    //if the data is valid, the input will be updated into the database/JSON Array
    updateDatabase();

  }

//Enters the data into the JSON array
function updateDatabase () {
    let fullName= document.forms["signup"]["full_name"].value;
    let email=document.forms["signup"]["email"].value;
    let phoneNumber=document.forms["signup"]["number"].value;
    let gender = document.forms["signup"]["Gender"].value;
    let username = document.forms["signup"]["username"].value;
    let password = document.forms["signup"]["password"].value;

    if(userType==""){ //will execute if user type is empty
        userType="User"
    }
    console.log(userType);

    let user_records= new Array();
    user_records=JSON.parse(localStorage.getItem("Users"))?JSON.parse(localStorage.getItem("Users")):[] //putting data from User array into user_records

    if(user_records.some((v)=>{return v.Username==username})){ //checking if user already exists
        window.alert("User already exists.");
    }else{
        //if user doesn't exists, add record to data
        user_records.push({
            "FullName":fullName,
            "email":email,
            "PhoneNumber":phoneNumber,
            "UserType": userType,
            "Gender":gender,
            "Username":username,
            "Password":password
        })
        localStorage.setItem("Users",JSON.stringify(user_records)); //upload data into Users JSON Array
        window.alert("User account created successfully. Please log in!");
        window.location.href="login.html";
    }

}