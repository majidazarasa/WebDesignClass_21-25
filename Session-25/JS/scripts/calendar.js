let myDate = new Date();
let day;
debugger
switch (myDate.getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day="Working Day";
        break;
    case 0:
    case 6:
        day="Holiday";
        break;

    default:
        day="unknown";
}
document.getElementById("demo").innerText = "Today is: " + day;