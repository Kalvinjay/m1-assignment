
    function ShowHideDiv() {
        var contact = document.getElementById("selectContact");
        var selected = contact.options[contact.selectedIndex].text;
        var selectEmail = document.getElementById("optionEmail");
        var selectPhone = document.getElementById("optionPhone");
        var inputEmail = document.getElementById("email");
        var inputPhone = document.getElementById("phone");
        var labelemail = document.getElementById("emaillabel");
        var labelphone = document.getElementById("phonelabel");

        if (selectEmail.selected) {
            inputEmail.style.display = "block";
            inputPhone.style.display = "none";
            labelphone.style.display = "none";
            labelemail.style.display = "block";
        } else if (selectPhone.selected) {
            inputEmail.style.display = "none";
            inputPhone.style.display = "block";
            labelemail.style.display = "none";
            labelphone.style.display = "block";
        } else {
            inputEmail.style.display = "none";
            inputPhone.style.display = "none";
            labelemail.style.display = "none";
        }
    }
    function load() {
        var whichOption = document.getElementById('selectContact');
        whichOption.addEventListener("change", ShowHideDiv);
        var inputEmail = document.getElementById("email");
        var inputPhone = document.getElementById("phone");
        inputEmail.style.display = "none";
        inputPhone.style.display = "none";
        var labelemail = document.getElementById("emaillabel");
        var labelphone = document.getElementById("phonelabel");
        labelemail.style.display = "none";
        labelphone.style.display = "none";
    }
    
    document.addEventListener("DOMContentLoaded", load);