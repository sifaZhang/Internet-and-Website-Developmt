
let users = [];

function submitForm() {
    console.log("Hello world!");
    let form = document.getElementById("user-form");

    console.log("form variable is: ", form);

    let fname = form["first-name"].value;
    let lname = form["last-name"].value;
    let email = form["email"].value;
    let address = form["address"].value;
    let phone = form["phone"].value;
    let color = form["color"].value;

    const user = {
        firstName: fname,
        lastName: lname,
        email: email,
        address: address,
        color: color,
        phone: phone
    }

    users.push(user);

    loadUsers();

}

let btn = document.getElementById("user-form-submit");
btn.addEventListener("click", submitForm);


function loadUsers() {
    let userList = document.getElementById("user-list");
    userList.innerHTML = "";
    
    for (let i = 0; i < users.length; i++){
        let userDiv = document.createElement("div");
        userDiv.classList.add("user");

        let userFullName = users[i].firstName + " " + users[i].lastName;

        userDiv.innerHTML = userFullName + "," + users[i].phone + "," + users[i].address + "," + users[i].color + "," + users[i].email;

        userList.appendChild(userDiv);
    }
}
