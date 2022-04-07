

// this javascript page contains  edit/update profile functionality for both user and admin


// function to validate email address if an email address is to be updated
function validateEmail() {
    var email = document.getElementById('email').value; //
    var elementBorder = document.getElementById("emailDiv");
    let elementError = document.getElementById('emailError');

    //checking email for validation

    if (email != '') { //if an email is enetered in text box
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            elementBorder.classList.remove("success");
            elementBorder.classList.add("error");
            elementError.innerHTML = 'Please enter your email.';
        } else {
            elementError.innerHTML = '';
            elementBorder.classList.remove("error");
            elementBorder.classList.add("success");
        }
    } else {
        elementError.innerHTML = '';
        elementBorder.classList.remove("error");
        elementBorder.classList.remove("success");
    }
}

// function to validate phone number if an phone number is to be updated
function validateNumber(){
    var number = document.getElementById('number').value;
    var elementBorder = document.getElementById("numberDiv");
    let elementError = document.getElementById('numberError');
  
    //checking phone number for validation
    if(number !=''){ //if phone number is to be edited
    if (!(number.match(/^\d{10}$/))) {
        elementBorder.classList.remove("success");
        elementBorder.classList.add("error");
        elementError.innerHTML = 'Please enter your Phone number.';
    } else {
        elementError.innerHTML = '';
      elementBorder.classList.remove("error");
      elementBorder.classList.add("success");
    }
    }else{
        elementError.innerHTML = '';
        elementBorder.classList.remove("error");
        elementBorder.classList.remove("success");
    }
  
}


function validatePassword(){
    var password = document.getElementById('password').value;
    var elementBorder = document.getElementById("passwordDiv");
    let elementError = document.getElementById('passwordError');
  
    //checking password for validation
   if(password!=''){
   if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(password))) {
    elementBorder.classList.remove("success");
    elementBorder.classList.add("error");
    elementError.innerHTML = 'Please enter a valid password.';
    } else {
        elementError.innerHTML = '';
      elementBorder.classList.remove("error");
      elementBorder.classList.add("success");
    }
  }else{
    elementError.innerHTML = '';
    elementBorder.classList.remove("error");
    elementBorder.classList.remove("success");
  }
}


//update the profile
function updateProfile(){
    //getting values from the form
    let fullName = document.forms["update"]["full_name"].value;
    let email = document.forms["update"]["email"].value;
    let phoneNumber = document.forms["update"]["number"].value;
    let gender = document.forms["update"]["Gender"].value;
    let username = document.forms["update"]["username"].value;
    let password = document.forms["update"]["password"].value;

    let localUsername = localStorage.getItem('Username') ? localStorage.getItem('Username') : ''

    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;


    let user_records = new Array(); //creating user_records array to store the JSON object
    user_records = JSON.parse(localStorage.getItem("Users")) ? JSON.parse(localStorage.getItem("Users")) : []  //putting data from User array into user_records
    const index = user_records.findIndex(user_records => user_records.Username == localUsername);//getting index of the user using username
    

    var counterForUpdatedValues = 0;//number of fields updated by the user 

    //below section checks for validation and update the records accordingly.
    if (fullName != '') { //if name is being updated
        user_records[index].FullName = fullName;
        localStorage.setItem("Users", JSON.stringify(user_records));
        localStorage.setItem('FullName', fullName);
        counterForUpdatedValues++ //number of fields updated incremented
    }

    if (email != '') { // if email is being updated

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            user_records[index].email = email;
            localStorage.setItem("Users", JSON.stringify(user_records));
            localStorage.setItem('email', email);
            counterForUpdatedValues++;
        } else {
           validateEmail()
          
        }
    }

    if (phoneNumber != '') { //if phone number is being updated
        if (phoneNumber.length != 10) {//check for number validation
            validateNumber()
           
        } else {
            user_records[index].PhoneNumber = phoneNumber;
            localStorage.setItem("Users", JSON.stringify(user_records));
            localStorage.setItem('PhoneNumber', phoneNumber);
            counterForUpdatedValues++;
        }
    }

    if (gender != '') {//if gender is being updated
        user_records[index].Gender = gender;
        localStorage.setItem("Users", JSON.stringify(user_records));
        localStorage.setItem('Gender', gender);
        counterForUpdatedValues++;
    }

    if (username != '') { // if username is being updated
        if (user_records.some((v) => { return v.Username == username })) {
            window.alert("Username already exists.");
         
        } else {
            user_records[index].Username = username;
            localStorage.setItem("Users", JSON.stringify(user_records));
            localStorage.setItem('Username', username);
            counterForUpdatedValues++;
        }
    }

    if (password != '') { //if password is being updated

        if (!regularExpression.test(password)) { //cheking for password validation
            validatePassword()
     
        } else {
            user_records[index].Password = password;
            localStorage.setItem("Users", JSON.stringify(user_records));
            counterForUpdatedValues++;
        }
    }

    if (counterForUpdatedValues > 0) {
        window.alert(counterForUpdatedValues + " field(s) Updated Successfully")
        document.location.reload(true);
    }

}
