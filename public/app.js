// var stdName = document.getElementById('stdName');
// var email = document.getElementById("email");
// var password = document.getElementById('password');
// var contact = document.getElementById('contact');

var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


function Submit() {
    if (!stdName.value) {
        alert("Required : Name");
        return;
    }
    if (!email.value) {
        alert("Required : Email")
        return;
    }
    if (email.value.match(mailformat)) {

            } else {
                alert("Required : Email or Invalid Email Type")
                return
            }
        
        if (!password.value && password.value.length < 6) {
            alert("Required : Password or Password must contain 6 Digit")
            return;
        }
        if (password.value.length < 6) {
            alert("Required : Password or Password must contain 6 Digit")
            return;
        }
        if (!contact.value) {
            alert("Requrid : Contact")
            return;
        }
        else {
            var userData = {
                stdName,
                email,
                password,
                contact,
            }
        }

        console.log(userData.stdName.value);
        console.log(userData.email.value);
        console.log(userData.password.value);
        console.log(userData.contact.value);


    }


    function circle(){
        var hamza = document.getElementById("oval");
    hamza.className = "square-shape";
    }

    function square(){
        var hamza = document.getElementById("square");
        hamza.className = "rectangle-shape";
    }

    function rectangle(){
        var hamza  = document.getElementById("rectangle");
hamza.className = "circle-shape";
    }