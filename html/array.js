// let a = 5
let a = [5,4,2,1,10,20]
let b = ['red', 'green','blue'];
let c = [15, true, 'hello', null];

//(array) [index]
console.log(a);
console.log(c[3]);

//size of an array
console.log(c.length)
// accessing first element
console.log(a[0]);
//accessing last element
console.log(a[a.length-1])

let mark = [72,55,74,98,83]
console.log(mark);
console.log(mark[0]);
console.log(mark[2]);
console.log(mark[mark.length-1]);


for (let i=0; i<=mark.length-1; i++){
    mark[i]= mark[i]+5;
    console.log("array of elemets", mark[i]);
    
}
