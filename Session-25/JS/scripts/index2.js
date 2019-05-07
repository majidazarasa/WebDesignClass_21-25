function breakPoint()
{
    let text='';
    for(var i = 0; i < 10; i++)
    {
        if( i == 3 )
        {
            break;
        }
        text+="The Number is: "+i+"<br>";
    }
    document.getElementById("loop").innerHTML=text;
}