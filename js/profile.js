//if a logged in user tries to visit profile after loggin out, error will prompted
let name=localStorage.getItem('FullName')?localStorage.getItem('FullName'):''
let username=localStorage.getItem('Username')?localStorage.getItem('Username'):''
console.log(name);
if(name=='')
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