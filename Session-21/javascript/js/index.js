function getFullName() {
    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var fullName = fn + " " +ln+"!";
    return fullName;
}
function sayHello() {
    var hello = "Hello, " + getFullName();
    document.getElementById("demo").innerText = hello;
}