const express = require("express")
const app = express()
const router1 = express.Router()
const router2 = express.Router()

router1.get('/',(req,res)=>
res.send("home page")
)



router1.get('/about',(req,res)=>
res.send("about our page")
)
router2.get('/about',(req,res)=>
res.send("about our admin")
)


app.use('/user', router1);
app.use('/admin',router2);
app.listen(8080,()=>console.log('server running on port 11001'));

