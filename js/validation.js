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
    updateDatabase ();
  
  }
