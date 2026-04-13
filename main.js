function login() {

    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    var status;

    if (username == "" || password == "") {
        status = "empty";
    } 
    else if (username == "admin" && password == "12345") {
        status = "correct";
    } 
    else if (username == "admin" && password != "12345") {
        status = "wrongpass";
    } 
    else {
        status = "wronguser";
    }
    switch (status) {

        case "correct":
            document.getElementById("result").innerHTML = "Access Granted!";
            alert("Welcome admin!");
            break;

        case "wrongpass":
            document.getElementById("result").innerHTML = "Wrong Password!";
            alert("Incorrect password!");
            break;

        case "empty":
            document.getElementById("result").innerHTML = "Fill in all fields!";
            alert("Please enter username and password!");
            break;

        default:
            document.getElementById("result").innerHTML = "Invalid Username!";
            alert("User not found!");
    }

}