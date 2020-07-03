function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.Emailid.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.Emailid.focus();
    event.preventDefault();
    returnToPreviousPage();
    return false;
}
}