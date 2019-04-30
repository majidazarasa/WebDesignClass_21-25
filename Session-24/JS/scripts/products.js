let pdemo = document.getElementById("demo");

function checkHour()
{
    let hour = document.getElementById("hour").value;
    
    if( hour >= 1 && hour <= 11 ){
        pdemo.innerHTML = "Good Morning !";
    }
    else if( hour >= 12 && hour <= 13 ){
        pdemo.innerHTML = "Good Noon !";
    }
    else if( hour >= 14 && hour <= 17 ){
        pdemo.innerHTML = "Good Afternoon !";
    }
    else if( hour >= 18 && hour <= 19 ){
        pdemo.innerHTML = "Good Evening !";
    }
    else if( hour >= 20 && hour <= 24 ){
        pdemo.innerHTML = "Good Night !";
    }
    else{
        pdemo.innerHTML = "Wrong Hour !";
    }

}