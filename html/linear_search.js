let arr = [10,34,56,7,8,98,34,12];
let x = 8;
let found = 0;
for (let i=0; i<arr.length; i++){
    if (x===arr[i]){
        console.log("element found at position",i+1);
        found = 1
        break;
    }
}
    if(found==0)
        console.log("element not found");
    
