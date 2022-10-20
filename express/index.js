const express = require("express")
const app = express()

app.get('/',(req,res)=>
res.send("home page")
)


app.get('/about',(req,res)=>
res.send("about our page")
)



app.listen(8080,()=>console.log('server running on port 11001'));
