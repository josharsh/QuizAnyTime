function validateform()
{

var name=document.forms["form"]["name"].value;
var password=document.forms["form"]["pwd"].value;
var email=document.forms["form"]["email"].value;
var phone=document.forms["form"]["phone"].value;
var college=document.forms["form"]["college"].value;


var phoneno = /^\d{10}$/;


if(!(name.match(/^[a-zA-Z ]*$/)))    //VALIDATION FOR NAME
{
  alert('Only letters and white spaces allowed in name.');
  return(false);
}


if(password.length < 6)              //VALIDATION FOR PASSWORD
{
  alert('Password should be atleast of 6 characters');
  return(false);
}

if (!(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)))     //VALIDATION FOR EMAIL
  {

    alert("You have entered an invalid email address!");
    return(false);

  }


  if(!(phone.match(phoneno)))  // VALIDATION FOR PHONE NUMBER
  {
      alert("Not a valid Phone Number");
      return(false);

  }


  if(!(college.match(/^[a-zA-Z ]*$/)))    //VALIDATION FOR  COLLEGE NAME
  {
    alert('Only letters and white spaces allowed in college name.');
    return(false);
  }


}
