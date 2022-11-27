function passwordChecker(){
    var enteredPassword = document.getElementById("ipass").value;
    if(enteredPassword=="AMS-C-A777"){
        window.location.href = "http://www.w3schools.com";

    }
    else{
        alert("Entered Value is incorrect")
    }
}