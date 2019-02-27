function validatePassword() {
    var hasError = false;
    var patt1 = new RegExp("^(?=.{6,})");
    var patt2 = new RegExp("^(?=.{,12})$");
    var patt3 = new RegExp("^(?=.*[a-z])");
    var patt4 = new RegExp("^(?=.*[A-Z])");
    var patt5 = new RegExp("^(?=.*[0-9])");
    var patt6 = new RegExp("^(?=.*[*$_#=@])");
    var patt7 = new RegExp("^(?=.*[!%()])");
    var inputTxt = document.getElementById('mainInput').value;
    var pswdLst = inputTxt.trim().split(',');
    var errorTxt="";
    pswdLst.forEach(testPassword);
    function testPassword(pswd) {
        pswd = pswd.trim();
        errorTxt += pswd + " ";
        if(!patt1.test(pswd)){
            errorTxt += "Password must be at least 6 characters long."
        } else if (pswd.length > 12){
            errorTxt += "Password must be at max 12 characters long."
        } else if(!patt3.test(pswd)){
            errorTxt += "Password must contain at least one letter from a-z."
        } else if(!patt4.test(pswd)){
            errorTxt += "Password must contain at least one letter from A-Z."
        } else if(!patt5.test(pswd)){
            errorTxt += "Password must contain at least one letter from 0-9";
        } else if(patt7.test(pswd)) {
            errorTxt += "Password cannot contain %!)(.";
        } else if(!patt6.test(pswd)) {
            errorTxt += "Password must contain at least one letter from *$_#=@";
        } else {
            errorTxt += "Success";
        }
        errorTxt+="<br>";
    }
    document.getElementById('error').innerHTML = errorTxt;
}
