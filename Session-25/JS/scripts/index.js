
let count=0;

function UpCount()
{
    let i=1;
    count++;
    document.getElementById("loop").innerHTML="";
    while(i <= count)
    {
        debugger
        document.getElementById("loop").innerHTML=(i++)+" ";
    }
}
function DownCount()
{
    let i=1;
    count--;
    document.getElementById("loop").innerHTML="";
    while(i <= count)
    {
        debugger
        document.getElementById("loop").innerHTML=(i++)+" ";
    }
}

