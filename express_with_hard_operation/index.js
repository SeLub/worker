const express = require('express')
const app = express()
 
let counter = 0
 
app.get('/',(req,res) => {
  counter++;
  res.status(200).json({counter})
})
 
app.get('/heavy',(req,res) => {
for(let i=0;i<1e17;i++){
    counter++;
}
res.status(200).json({counter})
 
})

app.listen(3000,() => {
  console.log("App is listening on port 3000")
})