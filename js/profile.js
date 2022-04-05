

  //following script removes searchUser.html from the navigation bar if usertype=='User',  as this feature is not given to the user
  let UserType = localStorage.getItem('UserType') ? localStorage.getItem('UserType') : ''
  if (UserType == "User") {
    document.getElementById("searchUsers").style.display = "none";
  }


//if a logged in user tries to visit profile after loggin out, error will prompted
let fullname=localStorage.getItem('FullName')?localStorage.getItem('FullName'):''
if(fullname=='')
{
  alert("You haven't logged in.");
  window.location.href="login.html";
}

//logout functionality
function Logout()
{

  localStorage.removeItem('FullName');
  localStorage.removeItem('email');
  localStorage.removeItem('PhoneNumber');
  localStorage.removeItem('Gender');
  localStorage.removeItem('Username');
  localStorage.removeItem('UserType');
  window.location.href="login.html";
}