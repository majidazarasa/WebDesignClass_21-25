let count=0;

function Increment()
{
    count++;
    ShowCount();
}
function Decrement()
{
    count--;
    ShowCount();
}
function ResetCount()
{
    count=0;
    ShowCount();
}
function ShowCount()
{
    document.getElementById("loop").innerHTML = "Count = " + count + " ";
}

