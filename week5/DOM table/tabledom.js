function addressBookItem(fname, lname, email) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
}

addressBookItem.prototype.write = function () {
    let adrbook = "<tr><td>" + this.fname + "</td>";
    adrbook += "<td>" + this.lname + "</td>";
    adrbook += "<td>" + this.email + "</td></tr>";

    document.write(adrbook);
}

function toggleBold(object) {
    var tablecell = object;

    // toggle bold text
    if (tablecell.style.fontWeight === 'bold') {
        tablecell.style.fontWeight = 'normal';
    } else {
        tablecell.style.fontWeight = 'bold';
    }
}


function toggleBG(object) {
    var tablecell = object;

    // toggle background styles
    if (tablecell.style.backgroundColor === 'green') {
        tablecell.style.backgroundColor = 'white';
        tablecell.style.fontSize = 'medium';
        tablecell.style.color = 'black';

    } else {
        tablecell.style.backgroundColor = 'green';
        tablecell.style.fontSize = 'xx-large';
        tablecell.style.color = 'white';
    }
}

/*
 * Exercise Part 1.
 */
function append_row() {
    // Take input from user
    let fname = prompt("please input your first name:", "Your first name`");
    let lname = prompt("please input your last name:", "Your last name");
    let email = prompt("please input your email:", "Your email address");

    // Create a table row
    let tableObject = document.getElementsByTagName("table")[0];
    let tableRowObject = tableObject.insertRow();

    let element1 = tableRowObject.insertCell();
    element1.innerHTML = fname;
    element1.style.color = "green";

    let element2 = tableRowObject.insertCell();
    element2.innerHTML = lname;
    element2.style.color = "green";

    let element3 = tableRowObject.insertCell();
    element3.innerHTML = email;
    element3.style.color = "green";
    
    // Add content, styles, and event listeners to row elements
    element1.addEventListener("click", function() {toggleBold(this)});
    element2.addEventListener("click", function() {toggleBold(this)});
    element3.addEventListener("click", function() {toggleBold(this)});
    element1.addEventListener("mouseover", function() {toggleBG(this)});
    element2.addEventListener("mouseover", function() {toggleBG(this)});
    element3.addEventListener("mouseover", function() {toggleBG(this)});
    element1.addEventListener("mouseout", function() {toggleBG(this)});
    element2.addEventListener("mouseout", function() {toggleBG(this)});
    element3.addEventListener("mouseout", function() {toggleBG(this)});
}

let aB1 = new addressBookItem('Roger', 'Williams', 'rwilliams@gmail.com');
let aB2 = new addressBookItem('Rose', 'Schultz', 'rose_s@earthlink.net');

document.write("<table border = '1'><tr><th>First Name</th><th>Last Name</th><th>Email Address</th></tr>");

aB1.write();
aB2.write();

document.write("</table>");

let tableObject = document.getElementsByTagName("table")[0];
let tableRows = tableObject.rows;
let tableRowLength = tableObject.rows.length;

for (let i = 0; i < tableRowLength; i++) {
    let cellsOfCurrentRow = tableRows[i].cells;
    let numberOfCells = cellsOfCurrentRow.length;

    for (let x = 0; x < numberOfCells; x++) {
        cellsOfCurrentRow[x].addEventListener("click",function() {toggleBold(this)});
        cellsOfCurrentRow[x].addEventListener("mouseover", function() {toggleBG(this)});
        cellsOfCurrentRow[x].addEventListener("mouseout", function() {toggleBG(this)});
    }
}
