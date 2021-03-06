//this JS page contains the functionality of authenticating user upon signing in and redirecting to the respective pages

// if a user is logged in but tries to visit sign in page, the following will redirect them to their profile pages
let FullName=localStorage.getItem('FullName')?localStorage.getItem('FullName'):'' //checking is there is a name in the local storage, if there is, someone is logged in


if(FullName!='')
{ //if someone is logged in, redirect to profile
    window.location.href="commonProfile.html";
  
}

//verifying user credentials 
function loginAuthentication() {

    //getting values from sign in form
    let username = document.forms["signin"]["username"].value;
    let password = document.forms["signin"]["password"].value;
    let elementError = document.getElementById('submitError');

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("Users")) ? JSON.parse(localStorage.getItem("Users")) : [] // getting Users array to check for user credentials

    if (user_records.some((v) => { return v.Username == username && v.Password == password })) { //if credentials matches a user

        let current_user = user_records.filter((v) => { return v.Username == username && v.Password == password })[0] //getting the user's data

        //setting the user information temporarily in the local storage as seperate variables
        localStorage.setItem('FullName', current_user.FullName);
        localStorage.setItem('email', current_user.email);
        localStorage.setItem('PhoneNumber', current_user.PhoneNumber);
        localStorage.setItem('Gender', current_user.Gender);
        localStorage.setItem('Username', current_user.Username);
        localStorage.setItem('UserType', current_user.UserType);

        window.location.href = "commonProfile.html"; 

    } else {
        elementError.innerHTML = 'Username and/or password incorrect!';
    }
}