let name=localStorage.getItem('FullName')?localStorage.getItem('FullName'):''
let username=localStorage.getItem('Username')?localStorage.getItem('Username'):''
console.log(name);
if(name=='')
{
  alert("You haven't logged in.");
  window.location.href="login.html";
}

let user_records= new Array();
user_records=JSON.parse(localStorage.getItem("Users"))?JSON.parse(localStorage.getItem("Users")):[]
console.log(username);
const index = user_records.findIndex(user_records => user_records.Username == username);
console.log(index);


//Log object to Console.
console.log("Before update: ", user_records[index])

user_records[index].Username="Doubleunderscore";
localStorage.setItem("Users",JSON.stringify(user_records));


function Logout()
{

  localStorage.removeItem('FullName');
  localStorage.removeItem('email');
  localStorage.removeItem('PhoneNumber');
  localStorage.removeItem('Gender');
  localStorage.removeItem('Username');
  window.location.href="login.html";
}