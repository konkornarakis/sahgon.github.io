window.onload = function(){
    const b = document.getElementById("submit");
    const pw = document.getElementById("pw");
    const pwr = document.getElementById("pw-repeat");
    const pc = document.getElementById("postalcode");
    const email = document.getElementById("email");

    function validateForm() {
        // This function deals with validation of the form fields
        var x, y, i, valid = true;
        y = document.getElementsByTagName("input");
        // A loop that checks every input field in the current tab:
        for (i = 0; i < y.length; i++) {
            // If a field is empty...
            if (y[i].value == "") {
                // add an "invalid" class to the field:
                y[i].className += " invalid";
                // and set the current valid status to false:
                valid = false;
            } else {
                y[i].classList.remove("invalid");
            }
        }
        return valid; // return the valid status
    }

    const f = document.getElementById("regForm");
    const pf = document.getElementById("completed");

    pf.style.display = "none";

    f.onsubmit = function() {
        oncompleteform();
    }; 

    b.onclick = function() {
        console.log("b clicked");
    };

    function oncompleteform() {
        console.log("submitted");
        f.style.display = "none";
        pf.style.display = "flex";
        console.log("showing completed");
    }

    // b.onclick = validateForm;
    b.onsubmit = oncompleteform;

    pw.onchange = validatePassword;
	pwr.onchange = validatePassword;
    pc.onchange = validatePostalCode;
    function validatePassword(){
        console.log("validating passwords");
        var pass2 = pwr.value;
        var pass1 = pw.value;
        if(pass1!=pass2) {
            pwr.setCustomValidity("Οι κωδικοί δεν ταιριάζουν.");
            console.log("passwords don't match");
        } else {
            if (pass1 === pass2 && pass1.length < 4) {
                pw.setCustomValidity("Πολύ μικρός κωδικός. Πρέπει να είναι περιέχει τουλάχιστον 4 χαρακτήρες.")
            } else {
                pw.setCustomValidity('');
            }
            pwr.setCustomValidity('');	 
            //empty string means no validation error
        }
    }

    function validatePostalCode(){
        let v = pc.value;
        console.log("validating postal code");
        if(v==='20300' || v=="20 300") {
            pc.setCustomValidity("Η εγγραφή δεν είναι διαθέσιμη για αυτή την περιοχή.");
            console.log("not available");
        } else {
            pwr.setCustomValidity('');	 
            //empty string means no validation error
        }
    }

    function validateEmail() {
        let m = email.value;
        console.log("validating email");
        if (m.includes("@yahoo")) {
            email.setCustomValidity("Διευθύνσεις email από αυτόν τον πάροχο δεν μπορούν να γίνουν δεκτές.");
        } else {
            email.setCustomValidity('');
        }
    }
};
