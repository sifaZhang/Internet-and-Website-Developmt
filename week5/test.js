function Person(fname, lname) {
    return {
        firstName: fname,
        lastName: lname,
        toString: function() {
            return firstName + " " + lastName;
        }
    }
}

let p1 = Person("1", "1");
console.log(p1.toString());
console.log(p1);