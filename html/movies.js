let movies = [

    {
        title : "Ironman",
        author: "Marvel",
        reading: true
 
    }
,
{
    title : "Superman",
        author: "DC",
        reading: false
}
,

{
    title : "LionKing",
       author: "Disney",
        reading: true
}

,
]

for (let a=0; a<movies.length;a++){
    console.log(" The movie " + movies[a].title + " by " + movies[a].author)

if (movies[a].reading ==false){
    console.log("I have not read it yet", movies[a].title)}
}



// var list = [
//     {
//        firstName: "Kiran",
//        lastName : "Kumar",
//        salary  : 25000
//        },
//     {
//        firstName: "Mohan",
//        lastName : "Srivastav",
//        salary  : 20000
//       },
//     {
//        firstName: "Mary",
//        lastName : "Kom",
//        salary   : 23000
//        }
//       ];
      
//       for (let a=0; a<list.length;a++)
//       if (list[a].salary>22500)
//       {console.log("The salary of "+list[a].firstName,list[a].lastName +" is "+ list[a].salary,)

//       }


// let myNums = [{"x": 9,"y": 5},
// {"x": 6,"y": 3},
// {"x": 7,"y": 7},{"x": 5,"y": 5},
// {"x": 0,"y": 3},{"x": 7,"y": 3},{"x": 4,"y": 9},
// {"x": 8,"y": 8},{"x": 5,"y": 3},{"x": 1,"y": 7},
// {"x": 7,"y": 5},{"x": 7,"y": 7},{"x": 6,"y": 0},
// {"x": 8,"y": 3},{"x": 1,"y": 3},{"x": 3,"y": 2},
// {"x": 9,"y": 3},{"x": 7,"y": 6},{"x": 7,"y": 1},
// {"x": 1,"y": 7}]
 
// let count = 0
// for ( let i=0; i<myNums.length; i++){
//     if (myNums[i].x == myNums[i].y)
//     count++
// }
// console.log(count)