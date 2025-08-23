let nextItem = 0;
let currentCart = new Array();

function loadXMLFile(xmlFile) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", xmlFile, false);
    xmlhttp.send();
    return (xmlhttp.responseXML);
}

function displayBooks() {
    let xmlDoc = loadXMLFile("books.xml");

    txt = "<table border='0px' id='tblBook' cellpadding='3px' cellspace='0px'>";
    txt += "<tr><th>Item</th><th>Title</th><th>Author</th><th>Price</th><th>Add</th></tr>";

    books = xmlDoc.documentElement.getElementsByTagName("BOOK");
    for(let i = 0; i < books.length; i++) {
        txt += "<tr>"

        txt += "<td align='left'>" + i + "</td>";
        bookChildren = books[i].getElementsByTagName("TITLE");
        txt += "<td align='left' id='title" + i + "'>" 
            + bookChildren[0].firstChild.nodeValue + "</td>";

        bookChildren = books[i].getElementsByTagName("AUTHOR");
        txt += "<td align='left'>" 
            + bookChildren[0].firstChild.nodeValue + "</td>";

        bookChildren = books[i].getElementsByTagName("PRICE");
        txt += "<td align='left' id='price" + i +"'>" 
            + bookChildren[0].firstChild.nodeValue + "</td>";

        txt += "<td align='right'><img src='book-icon.jpg'/></td>";
        txt += "<td align='right'><button type='button' id='bntAddTocart' onclick='addToCart(" + i + ")'>Add to Cart</button></td>";
        
        txt += "</tr>";
    }
    txt += "</table>"

    document.getElementById("txtBookInfo").innerHTML = txt;
}



function displayCart() {
    txt = "<table id='tblCart' border='5px' cellpadding='1px' cellspacing='0px' align='center' style='margin:0px;border:#666 solid;'>";
    txt += "<tr><th>Item</th><th>Title</th><th>Price</th><th>Quantity</th></tr>"
    
    totalCost = 0;

    for ( i = 0; i < nextItem; i++) {
        txt += "<tr>";

        txt += "<td align='left'>" + currentCart[i][0] + "</td>";
        txt += "<td align='left'>" + currentCart[i][1] + "</td>";
        txt += "<td align='left'>" + currentCart[i][2] + "</td>";
        txt += "<td align='right'>" + currentCart[i][3] + "</td>";

        totalCost += currentCart[i][2] * currentCart[i][3];

        txt += "</tr>";
    }

    txt += "<td align='center' colspan='4' style='color:#900;'> Total Cost: " + 
    parseFloat(totalCost).toFixed(2)+ "</td>";

    txt += "</table>";

    document.getElementById("txtCart").innerHTML = txt;
}

window.onload = function () {
    displayBooks();
    displayCart();
}

function addToCart(selectedItem) {
    let addedIndex = -1;

    for (i = 0; i < nextItem; i++) {
        if ( currentCart[i][0] == selectedItem) {
            addedIndex = i;
            break;
        }
    }

    if  (addedIndex == -1 ){
        currentCart[nextItem] = new Array();

        currentCart[nextItem][0] = selectedItem;
        currentCart[nextItem][1] = document.getElementById("title" + selectedItem).innerHTML;
        currentCart[nextItem][2] = document.getElementById("price" + selectedItem).innerHTML;
        
        currentCart[nextItem][3] = 1;

        nextItem += 1;
    }
    else
    {
        currentCart[addedIndex][3] += 1;
    }

    displayCart();
}

function clearCart() {
    nextItem = 0;
    currentCart = new Array();

    displayCart();
}

function checkOut() {
    txt = "<ITEMS";

    for (i = 0; i < nextItem; i++)
    {
        txt += "<ITEM>";
        txt += "<TITLE>" + currentCart[i][1] + "</TITLE>";
        txt += "<PRICE>" + currentCart[i][2] + "</PRICE>";
        txt += "<QUTANTY>" + currentCart[i][3] + "</QUTANTY>";
        txt += "</ITEM>";
    }
    txt += "</ITMES>"

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(txt, "text/xml");

    xmlhttp = new XMLHttpRequest();

    let url = "ProcessingOrder.php?XMLStr=" + txt;
    xmlhttp.open("GET", url, false);
    xmlhttp.send(null);

    clearCart();
}