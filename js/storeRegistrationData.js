// this javascript page handles user,admin registration functionality

let userType="";// user type , either admin or user
function setUserType(){  //will be executed only by adminRegistration
    userType="Admin";
    validateSignupForm();
}

//validated phone number and password
function validateSignupForm() {

    //getting values from the signup form
    let fullName= document.forms["signup"]["full_name"].value;
    let email = document.forms["signup"]["email"].value;
    let phoneNumber= document.forms["signup"]["number"].value;
    let gender= document.forms["signup"]["Gender"].value;
    let username= document.forms["signup"]["username"].value;
    let password=document.forms["signup"]["password"].value;
  
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/; //password regex
 
    //section below checks for validation of each field

    if(fullName==''){ //checking for the Name of the user
      window.alert("Enter your name");
      return false;
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) //check for email validation
    {
      window.alert("Enter a valid Email address");
      return false;
    }

    if (phoneNumber.length != 10) { // check for password length
      window.alert("Enter a valid phone number");
      return false;
    }

    if(gender==''){ //checking for gender entry
      window.alert("Select your gender");
      return false;
    }

    if(username==''){ //checking for the username entry
      window.alert("Enter a Username");
      return false;
    }

    if(!regularExpression.test(password)) { //check for password using regex
        alert("Password should contain atleast one number, one special character and must have 8-16 characters.");
        return false;
    }

    //if the data is valid, the input will be updated into the database/JSON Array
    updateDatabase(fullName,email,phoneNumber,gender,username,password);

  }

//Enters the data into the JSON array
function updateDatabase (fullName,email,phoneNumber,gender,username,password) {

    if(userType==""){ //will execute if user type is empty
        userType="User"
    }
  
    let user_records= new Array();  //creating user_records array to store the JSON object
    user_records=JSON.parse(localStorage.getItem("Users"))?JSON.parse(localStorage.getItem("Users")):[] //putting data from User array into user_records

    if(user_records.some((v)=>{return v.Username==username})){ //checking if username already exists
        window.alert("User already exists.");
    }else{
        //if username doesn't exists, add record to 'user_records' Array
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

        window.alert("User account created successfully. Please log in!")
        window.location.href="login.html"; //redirect to login.html after a successful sign up
    }

}