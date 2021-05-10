function validateform() {
    let x, y, z;
    x = document.getElementById("validationDefault01").value;
    y = document.getElementById("validationDefault02").value;
    z = document.getElementById("validationDefault03").value;


    if (x == "") {
        document.getElementById("validationDefault01").innerText = "First Name is Manadatory!!"
    }

    else if (y == "") {
        document.getElementById("validationDefault02").innerText = "Last Name is Manadatory!!"
    }

    else if (z == "") {
        document.getElementById("validationDefault01").innerText = "City is Manadatory!!"
    }
};