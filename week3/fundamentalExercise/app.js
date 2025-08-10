window.onload = function () {
    // ignore this for now
    consoleRedirect();

    // Add your code below this line
    // if (true) {
    //     let myLet = "I am a let";
    //     var myVar = "I am a var";
    //     const myConst = "I am a const";
    // }

    // //console.log(myLet); 
    // //console.log(myconst);
    // console.log(myVar);

    // const myConst = "Hello,";
    // myConst += " World!; ";

    let myLet = "Hello,";
    myLet += " World!; ";
    console.log(myLet);

    let a = 10;
    // let b = 5;
    //let b = "5";
    let b = true;


    console.log("a + b = ");
    console.log(a + b);

    console.log("a += b = ");
    console.log(a += b);

    console.log("++a =");
    console.log(++a);

    console.log("a ** b =");
    console.log(a ** b);

    console.log("a % b =");
    console.log(a % b);

    console.log(a);
    console.log(b);

    let myString = "Hello World!";
    console.log(myString.length)
    console.log(myString.substring(2,10));
    console.log(myString[3]);
    console.log(myString.toUpperCase());
    console.log(myString.toLowerCase());
    console.log(myString.split(" "));

    let element = document.getElementById("sampleSentance");
    console.log(element);
    console.log(element.innerText);
    element.innerText += "(This is a new string)";

    let elements = Array.from(document.getElementsByClassName("sampleData"));
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i].innerText);
    }




    

    // Add your code above this line



    // Add click event listeners to each of the calculator operation buttons,
    // and add a function to the events. 

    // Save reference to the calculator input/output fields

    // Calculator operator functions. Each function will read the values from
    // the user input, convert the values to numbers, apply an operation to
    // the numbers, and store the output value in the result field. 

}

function consoleRedirect() {
    // This code redirects console log information and prints
    // it to a textarea on the web page instead.
    const printField = document.getElementById("printField");
    console.stdlog = console.log.bind(console);
    window.onerror = function(msg, url, line) {
        console.error(`Error line ${line}: ${msg}`);
    }
    function log(content, status) {
        if (Array.isArray(content)) {
            let s = "";
            for (let i = 0; i < content.length; i++) {
                s = s.concat(content[i], ", ");
            }
            content = `array: [ ${s.substring(0, s.length - 2)} ]`;
        }
        let line = document.createElement("div");
        line.classList.add(status !== "error" ? "consoleLog" : "consoleError");
        line.innerText = content;
        printField.appendChild(line);
        printField.scrollTop = printField.scrollHeight;
    }
    console.log = function (content) {
        if (content.length > 17 && (content.substring(0, 13) === "[Five Server]" || content.substring(0, 17) === "Socket is closed.")) {
            console.stdlog(content);
            return;
        }
        log(content, "log");
    }
    console.error = function (content) {
        log(content, "error");
    }
}

