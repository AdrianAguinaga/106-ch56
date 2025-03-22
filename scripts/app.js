function sayHello()
{
    console.log("Hello there!");
    
}

function init()
{
    console.log("Hello im the init");
    let toy="its mine";
    sayHello();

}



window.onload = init;//we wait until the html and css gets resolved and then execute the 
//function