// let obj = {
//     name : "John" ,
//     favorite : "red",
//     bestnumer : 10
// }

// let obj2 = {
// name : "Ben",
// favorite : "blue",
// bestnumer : 1
// }

// let user = {
//     Username : "Code Youth",
//     Password : "Youth 123",
//     loggedin : false 
// }
// console.log(user) 

// let employee = {
// name : "Jimmy",
// employeeid : "#2151245",
// LastActive : (new Date()),
// Salary: parseFloat(500)
// }
// console.log(employee)

// let myObj = {
//     name: "Bifli",
//     grade: 42,
//     notes:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, aspernatur?"
// }
// console.log(myObj)

// let bool = {
// ImCool: false,
// ImLazy: true
// }
// console.log(bool)

// let myCats = {
// cat1 : "wiggles",
// cat2 : "fluffy",
// cat3 : "sir"

// }
// console.log(myCats.cat3)

// let myGames = {
//     action : "Uncharted",
//     shooter : "MW2",
//     horror : "resident evil"

// }
// console.log(myGames.action)

// let nestObj = {
// obj1:{
//     name : "Mat",
//     age:40,
//     job: "coder"
// }
// ,
//     obj2:{
//         name : "jim",
//         age:55,
//         job: "designer"
    
//     }

// }

// console.log(nestObj)

    let weather = {
   sea1 : {
    day1 : "Sunny",
    day2 : "Cloudy",
    day3 : "Raining"
   }
    ,

    sea2 : {
        day4: "Snowing",
        day5: "Hail",
        day6: "tornado"
    }


}
console.log(weather)

// let workPlace = {
//     names:{
//     employee1: "Jimmy",
//     employee2: "Carl",
//     employee3: "Benny"
//     }
// ,

// keys:{
//     Name: "Andrew",
//     Id: "#213419095",
//     HireDate: (new Date())

// }}
// console.log(workPlace)
// console.log(workPlace.keys.HireDate)


let workPlace = {
    employee1:{
            name: "Andrew",
            Id: "#5123571",
            HireDate: (new Date(2022-2-12))
        }

        ,

        employee2:{
        name: "Benny",
        Id: "#8937876591",
         HireDate: (new Date())
        }
    
        ,
    
        employee3:{
        name: "Carl",
        Id: "123519222",
        HireDate: (new Date())
    }}

    console.log(workPlace)
    console.log(workPlace.employee2.Id)
    console.log(workPlace.employee1.HireDate)