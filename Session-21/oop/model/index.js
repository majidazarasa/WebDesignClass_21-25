var person = {
    firstName: "",
    lastName: "",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
function sayHello() {
    person.firstName = document.getElementById("fname").value;
    person.lastName = document.getElementById("lname").value;
    document.getElementById("demo").innerHTML = "Hello, " + "<b>" + person.fullName() + "</b>!";
}