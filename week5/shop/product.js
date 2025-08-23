function product(productName, price, image) {
    this.productName = productName;
    this.price = price;
    this.image = image;

}

// var prod1 = new product('milk', 5, 'milk.jpg');
// var prod2 = new product('cornflake', 10, 'cornflake.jpg');
// var prod3 = new product('soda', 2, 'soda.jpg');
// var prod4 = new product('bread', 8, 'bread.jpg');
// var prod5 = new product('butter', 2, 'butter.jpg');
// var prod6 = new product('agria potatoes', 20, 'agria_potatoes.jpg');
// var products = [prod1, prod2, prod3, prod4, prod5, prod6];

var products = [];
if(window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
}
else{
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("GET", "product_list.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
var x = xmlDoc.getElementsByTagName("Product");

var pName = '';
var pPrice = 0;
var pImage = '';
for (i=0; i < x.length; i++) {
    pName = x[i].getElementsByTagName("ProductName")[0].childNodes[0].nodeValue;
    pPrice = x[i].getElementsByTagName("Price")[0].childNodes[0].nodeValue;
    pImage = x[i].getElementsByTagName("Image")[0].childNodes[0].nodeValue;
    var prod = new product(pName, pPrice, pImage);
    products[i] = prod;
}


function show_products() {
    var displaytext = '';
    var table = document.getElementById('dispProduct');
    for (i = 0; i < products.length; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = products[i].productName;
        cell2.innerHTML = '$' + products[i].price;
        cell3.innerHTML = '<img src="images/' + products[i].image + '" />';

        // var cellName = 's' + i;
        // var cell4 = row.insertCell(3);
        // cell4.setAttribute("name", cellName);
        // var checkbox = document.createElement("input");
        // var cname = 'ch' + i;
        // checkbox.setAttribute("type", "checkbox");
        // checkbox.setAttribute("name", i);
        // checkbox.setAttribute("id", cname);
        // checkbox.setAttribute("value", products[i].price);
        // checkbox.checked = false;
        // checkbox.setAttribute('onclick', 'myChange(this.value, this.name)');
        // cell4.appendChild(checkbox);

        var cell4 = row.insertCell(3);
        var buttonPlus = document.createElement('button');
        buttonPlus.setAttribute('name', i);
        buttonPlus.setAttribute('id', 'plus' + i);
        buttonPlus.textContent = '+';
        buttonPlus.setAttribute('onclick', 'plusNumber(this.name)');
        buttonPlus.setAttribute('value', products[i].price);
        cell4.appendChild(buttonPlus);

        var cell5 = row.insertCell(4);
        var cellName5 = 'ss' + i;
        cell5.setAttribute('name', cellName5);
        var quantityInput = document.createElement('input');
        var qname='q' + i;
        quantityInput.setAttribute('type', 'number');
		quantityInput.setAttribute('name', qname);
		quantityInput.setAttribute('id', qname);
		quantityInput.setAttribute('style', 'width:35px;');
        quantityInput.setAttribute('value', '0');
		cell5.appendChild(quantityInput);

        var cell6 = row.insertCell(5);
        var buttonMinus = document.createElement('button');
        buttonMinus.setAttribute('name', i);
        buttonMinus.setAttribute('id', 'minus' + i);
        buttonMinus.textContent = '-';
        buttonMinus.setAttribute('onclick', 'minusNumber(this.name)');
        buttonMinus.setAttribute('value', products[i].price);
        cell6.appendChild(buttonMinus);

        var cell7 = row.insertCell(6);
        cell7.setAttribute('id', 'sum' + i);
        cell7.innerHTML = '$0'
    }
}

function plusNumber(name) {
    let qName = 'q' + name;
    document.getElementById(qName).value = Number(document.getElementById(qName).value) + 1;

    document.getElementById('sum' + name).innerHTML = '$' + Number(document.getElementById(qName).value) 
    * Number(document.getElementById('plus' + name).value);
}

function minusNumber(name) {
    let qName = 'q' + name;
    if ( Number(document.getElementById(qName).value) > 0) {
        document.getElementById(qName).value = Number(document.getElementById(qName).value) - 1;

        document.getElementById('sum' + name).innerHTML = '$' + Number(document.getElementById(qName).value) 
        * Number(document.getElementById('minus' + name).value);
    }
}

function calculate_cost() {
    var result='';
    var ncheckbox='';
    var total=0;
    for( i = 0; i < products.length; i++){
        ncheckbox = 'ch' + i;
        qinput = 'q' + i;
        
        if ( document.getElementById(ncheckbox).checked) {
            total = total + Number(document.getElementById(ncheckbox).value) 
            * Number(document.getElementById(qinput).value);
        }
    }

    document.getElementById('calcost').innerHTML = 'Total to pay =$' + total;
}

function myChange(value, name) {
    if (document.getElementById('ch' + name).checked) {
        document.getElementById('q' + name).value = 1;
    }
    else {
        document.getElementById('q' + name).value = 0;
    }
}