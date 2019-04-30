// (function sayHello(){
//      console.log('Hello!');
// })();

username="omid";
password='Lennon';

function getUnamePass()
{
    let uname=document.getElementById('userName').value;
    let pword=document.getElementById('password').value;
    let result=login(uname, pword);
    document.getElementById('login').innerHTML=result;
}

function login(uname, pword)
{
    let returnValue;
    
    ((uname=='omid' || uname=='John') && pword=='Lennon')?
    returnValue='Hello, '+'<b>'+uname+'</b>'+'!':
    returnValue='can\'t access!';

    return returnValue;
};

