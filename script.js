
var errMsg = "כתובת דואר אלקטרוני חסרה או שגויה";
function Validate() {
    var emailFilter = /^.+@.+\..{2,3}$/;
    var txtMail = document.getElementById("mm_newemail");
    var checkBox = document.getElementById('checkBox');

    if (txtMail == null) {
        return false;
    }
    else if(checkBox.checked == false) {
        alert("אנא אשר קבלת דיוור");
        return false;
    }
    else if (!(emailFilter.test(txtMail.value))) {
        showErr(txtMail);
        txtMail.style.backgroundColor = "#ffcccc";
        txtMail.focus();
        return false;
    }
    else {
        txtMail.style.backgroundColor = "white";
        removeErr();
        return true;
    }
}
function removeErr() {
    var errSpan = document.getElementById("errph");
    if (errSpan != null) {
        errSpan.parentNode.removeChild(errSpan);
    }
}
function showErr(txtMail) {
    if (document.getElementById("errph") == null) {
        var errDiv = document.createElement('DIV');
        var innerDiv = document.createElement('DIV');
        errDiv.id = "errph";
        errDiv.className = "errph";
        innerDiv.innerHTML = errMsg;
        innerDiv.className = "errinnerph";
        errDiv.appendChild(innerDiv);
        txtMail.parentNode.appendChild(errDiv);
    }
}
