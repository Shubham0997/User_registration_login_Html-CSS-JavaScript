// this javascript page handles user,admin registration functionality

let userType="";// user type , either admin or user
function setUserType(){  //will be executed only by adminRegistration
    userType="Admin";
    validate();
}

//validated the inputs
function validate(){
  
  //getting inputs from the form
  const fullName = document.getElementById('full_name');
  const email = document.getElementById('email');
  const phoneNumber = document.getElementById('number');
  const gender = document.getElementById('Gender');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  
  //setting error border by adding error class accordingly
  const setError = (element, message) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');
  
      errorDisplay.innerText = message;
      inputControl.classList.add('error');
      inputControl.classList.remove('success')
  }
 
  //setting success border by adding success class accordingly
  const setSuccess = element => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');
  
      errorDisplay.innerText = '';
      inputControl.classList.add('success');
      inputControl.classList.remove('error');
  };
 
  //validate inputs from the form
  const validateInputs = () => {
  
    //trimming each input if blank spaces are found
      const fullnameValue = fullName.value.trim();
      const emailValue = email.value.trim();
      const phoneNumberValue = phoneNumber.value.trim();
      const genderValue = gender.value.trim();
      const usernameValue = username.value.trim();
      const passwordValue = password.value.trim();

      let wrongInput=0; //variable to check the number of wrong inputs
    
    //checking full name for validation
    if (fullnameValue === '') { 
      setError(fullName, 'Name is required.');
      wrongInput++
    } else {
      setSuccess(fullName);
    }

    //checking email for validation
    if (emailValue === '') {
      setError(email, 'Email is required.');
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue))) {
      setError(email, 'Provide a valid email address.');
      wrongInput++
    } else {
      setSuccess(email);
    }

    //checking phone number for validation
    if(phoneNumberValue.length != 10){
      setError(phoneNumber, 'Enter a valid phone number.');
      wrongInput++
    }else{
      setSuccess(phoneNumber);
    }

    //checking gender value for validation
    if (genderValue === '') {
      setError(gender, 'Gender is required.');
      wrongInput++
    } else {
      setSuccess(gender);
    }

    //checking username for validation
    if (usernameValue === '') {
      setError(username, 'Username is required.');
      wrongInput++
    } else {
      setSuccess(username);
    }

    //checking password for validation
    if (passwordValue === '') {
      setError(password, 'Password is required.');
      wrongInput++
    } else if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(passwordValue))) {
      setError(password, 'Enter a valid password.');
      wrongInput++
    } else {
      setSuccess(password);
    }

    //if even a single input is wrong, data won't be added to the database
    if (wrongInput > 0) {
      return false;
    } else {
      //if every input is correct, adding the data
      updateDatabase(fullnameValue, emailValue, phoneNumberValue, genderValue, usernameValue, passwordValue);
    }

  };
  validateInputs()
  }

//Enters the data into the JSON array
function updateDatabase (fullName,email,phoneNumber,gender,username,password) {

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

}