var password="mahan!";
var response;
var entryCount=0;
var maxTry=4;
var error=false;

while(password!=response && !error){
    if(entryCount<maxTry){
        response=window.prompt("Please enter your password");
        entryCount++
    } else {
        error=true;
    }    
}


if(error){
    alert("Too many try! Sorry you can't go further.")
}else alert("You got it");