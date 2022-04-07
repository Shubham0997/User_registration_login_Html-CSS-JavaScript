
let userType="";// user type , either admin or user
function setUserType(){  //will be executed only by adminRegistration
    userType="Admin";
    updateDatabase();
}



function validateFullName() {
  var fullName = document.getElementById('full_name').value;
  var elementBorder = document.getElementById("nameDiv");
  let elementError = document.getElementById('nameError');
  
  if (fullName === '') { 
    elementBorder.classList.remove("success");
    elementBorder.classList.add("error");
    elementError.innerHTML = 'Please enter your name.';
    } else {
      elementError.innerHTML = '';
      elementBorder.classList.remove("error");
      elementBorder.classList.add("success");
    }
}

function validateEmail() {
  var email = document.getElementById('email').value;
  var elementBorder = document.getElementById("emailDiv");
  let elementError = document.getElementById('emailError');

  //checking email for validation
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
    elementBorder.classList.remove("success");
    elementBorder.classList.add("error");
    elementError.innerHTML = 'Please enter your email.';
  }else{
    elementError.innerHTML = '';
    elementBorder.classList.remove("error");
    elementBorder.classList.add("success");
  } 

}

function validateNumber(){
  var number = document.getElementById('number').value;
  var elementBorder = document.getElementById("numberDiv");
  let elementError = document.getElementById('numberError');

  //checking phone number for validation
  if (!(number.match(/^\d{10}$/))) {
    elementBorder.classList.remove("success");
    elementBorder.classList.add("error");
    elementError.innerHTML = 'Please enter your Phone number.';
  } else {
    elementError.innerHTML = '';
    elementBorder.classList.remove("error");
    elementBorder.classList.add("success");
  }

}

function validateGender(){
  var gender = document.getElementById('Gender').value;
  var elementBorder = document.getElementById("genderDiv");
  let elementError = document.getElementById('genderError');

  //checking gender value for validation
  if (gender === '') {
    elementBorder.classList.remove("success");
    elementBorder.classList.add("error");
    elementError.innerHTML = 'Please select gender.';
  } else {
    elementError.innerHTML = '';
    elementBorder.classList.remove("error");
    elementBorder.classList.add("success");
  }

}

function validateUsername(){
  var username = document.getElementById('username').value;
  var elementBorder = document.getElementById("usernameDiv");
  let elementError = document.getElementById('usernameError');

  if (username === '') { 
    elementBorder.classList.remove("success");
    elementBorder.classList.add("error");
    elementError.innerHTML = 'Please enter your Username.';
  } else {
    elementError.innerHTML = '';
    elementBorder.classList.remove("error");
    elementBorder.classList.add("success");
  }
}

function validatePassword(){
  var password = document.getElementById('password').value;
  var elementBorder = document.getElementById("passwordDiv");
  let elementError = document.getElementById('passwordError');

  //checking password for validation
 if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(password))) {
  elementBorder.classList.remove("success");
  elementBorder.classList.add("error");
  elementError.innerHTML = 'Please enter a valid password.';
  } else {
    elementError.innerHTML = '';
    elementBorder.classList.remove("error");
    elementBorder.classList.add("success");
  }
}



//Enters the data into the JSON array
function updateDatabase () {

  //getting inputs from the form
  const fullName = document.getElementById('full_name').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('number').value;
  const gender = document.getElementById('Gender').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  let elementError = document.getElementById('submitError');

  if(fullName !='' && email!='' && phoneNumber!='' && gender!='' && username!=''&& password!=''){
    elementError.innerHTML = '';


  if(userType==""){ //will execute if user type is empty
      userType="User"
  }

  let user_records= new Array();  //creating user_records array to store the JSON object
  user_records=JSON.parse(localStorage.getItem("Users"))?JSON.parse(localStorage.getItem("Users")):[] //putting data from User array into user_records

  //checking if username already exists
  if(user_records.some((v)=>{return v.Username==username})){ 
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
  }else{
    validateFullName()
    validateEmail()
    validateNumber()
    validateGender()
    validateUsername()
    validatePassword()
    elementError.innerHTML = 'Please Enter the details';

  }

}