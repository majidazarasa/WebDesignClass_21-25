// (function sayHello(){
//      console.log('Hello!');
// })();

username="abcd";
password='1234';

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
    
    // if(uname===username && pword===password)
    //     returnValue='Hello, '+'<b>'+uname+'</b>'+'!';
    (uname===username && pword===password)?
    returnValue='Hello, '+'<b>'+uname+'</b>'+'!':
    returnValue='Username or Password Wrong!';

    return returnValue;
};

