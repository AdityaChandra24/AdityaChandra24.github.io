function passwordChecker(){
    var enteredPassword = document.getElementById("ipass").value;
    if(enteredPassword=="happybirthday"){
        window.location.href = "https://adityachandraa.notion.site/Private-9bd89deeea7047d591397cd68f20d98d";
        setTimeout(passwordChecker, 2000)
       
    }
    else{
        alert("Entered Value is incorrect");
    }
}
