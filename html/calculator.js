let a = parseInt(prompt("enter number"));
let b = parseInt(prompt("enter number"));
let choice= prompt("enter operator");

function choice(){
    
    if(choice=='+'){
        add(a,b);
    }
    

    else if(choice=='-'){
    
    
    sub(a,b)
    }
    
    else if (choice=='*'){
    
    
    mulitply (a,b)
    }
}

function add(a,b){
    let op= a+b;
    console.log("addition is",op)}

    function sub(a,b){
        let op= a-b;
    console.log("subtraction is",op)}

    function mulitply(a,b){
        let op= a*b;
        console.log("mulitplication is",op)}
