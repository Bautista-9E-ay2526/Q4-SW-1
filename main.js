function login() {

    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    var status;

    if (username == "" || password == "") {
        status = "empty";
    } 
    else if (username == "admin" && password == "19205") {
        status = "correct";
    } 
    else if (username == "admin" && password != "19205") {
        status = "wrongpass";
    } 
    else {
        status = "wronguser";
    }
    switch (status) {

        case "correct":
            document.getElementById("resulta").innerHTML = "Access Granted!";
            alert("Welcome admin!");
            break;

        case "wrongpass":
            document.getElementById("resulta").innerHTML = "Wrong Password!";
            alert("Incorrect password!");
            break;

        case "empty":
            document.getElementById("resulta").innerHTML = "Fill in all fields!";
            alert("Please enter username and password!");
            break;

        default:
            document.getElementById("resulta").innerHTML = "Invalid Username!";
            alert("User not found!");
    }

}