function printErr(id, error){
    document.getElementById(id).innerHTML = error;
}

function validateForm(){
    
    let email = document.form.email.value;
    let password = document.form.password.value;
    let gender1 = document.form.gender[0].checked;
    let gender2 = document.form.gender[1].checked;
    let gender3 = document.form.gender[2].value;
    let region = document.form.continent.value;

    let emailErr = pwErr = genderErr = regionErr = true;

    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if(email == "")
        printErr("valEmail", "Your Email cannot be blank");

    else if(!regEmail.test(email))
        printErr("valEmail", "Please enter a valid Email");
    

    else{
        printErr("valEmail", "");
        emailErr = false;
    }

    if(password == "")
    printErr("valPassword", "Please enter your Password");

    else if(!regPw.test(password))
        printErr("valPassword", "Please enter a valid Password");


    else{
        printErr("valPassword", "");
        pwErr = false;
    }

    if(gender1 == false && gender2 == false && gender3 == "")
        printErr("valGender", "Please select your Gender");

    else{
        printErr("valGender", "");
        tncErr = false;
    }

    if(region == "")
        printErr("valContinent", "Please enter Continent");

    else{
        printErr("valContinent", "");
        pwErr = false;
    }

    if(emailErr || pwErr || genderErr || regionErr){
        return false;
    }
}