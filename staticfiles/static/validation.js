/* Error text variables */

var OldPassword = "Please enter old Password"
var NewPassword = "Please enter your new password"
var Re_password = "Re-enter your new password"
var oldPassErr = "old and new password should not same"
var password_error = "Passwords mismatch please enter correct Password"


function isAlphaNumeric(e){ // Alphanumeric only
    var regex = new RegExp("^[a-zA-Z0-9\b_\-\s\]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
  e.preventDefault();
  return false;
}
function isAlphaNumericSpace(e){ // Alphanumeric only
    var regex = new RegExp("^[a-zA-Z0-9 \b_\-\s\]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
  e.preventDefault();
  return false;
}
function isComma(event){
        if (event.which == 188)
            return false;
}

function isregexComma(str){

  var objRegExp = /^[^,]+$/;
  return objRegExp.test(str)
}
function isregexGrave(str){

  var objRegExp = /^[^`]+$/;
  return objRegExp.test(str)
}
function isPriceFormat(price){
  var objRegExp = /^[0-9]+([\.]?[0-9]+)?$/;
  return objRegExp.test(price)
}

function isUpperCase(str) {
  return (/^[^a-z0-9]+$/).test(str);
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

function validatePassword(password){
  var objRegExp = /^(?:.{6,}|)$/;  
  return objRegExp.test(password)
}

function onlyAlphabets() { var charCode = event.keyCode;
 if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8) return true;
 else return false; }

function numeric(evt) {
    evt = (evt) ? evt : window.evt;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


function pricenumeric(evt) {
    evt = (evt) ? evt : window.evt;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function sortcodenumeric(){

   var foo = $("#sortCode").val().split("-").join("");
   if (foo.length > 0) {
     foo = foo.match(new RegExp('.{1,2}', 'g')).join("-");
   }
   $("#sortCode").val(foo);
}