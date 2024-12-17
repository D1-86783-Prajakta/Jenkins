const express = require('express')
const app = express()
app.get('/',(req,req)=>{
 res.send('welcome')
})

app.listen(4000,'0.0.0.0',()=>{
console.log('server started')
})
