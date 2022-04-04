const express = require('express')
const app = express()
const path = require('path')
const port = 3000;
const staticPath = path.join(__dirname, 'public')

app.use(express.static(staticPath))
app.get('/',(req,res) => {
    res.send("we are in")

})

app.listen(port,() => {
    console.log(`server is running on ${port}`)
})
