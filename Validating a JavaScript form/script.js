function checkdata()
{
    var username = document.getElementById("name");
    var emailaddress = document.getElementById("email");
    if(username.value==""){
        alert("Please enter the name");
        username.focus();
        return false;
    }

    if(emailaddress.value==""){
        alert("Please enter the email");
        emailaddress.focus();
        return false;
    }

    return true;
}

