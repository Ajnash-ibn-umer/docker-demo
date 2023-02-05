import express from 'express'
const PORT = process.env.PORT
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>hellxow dworld ajnash</h1>')
})
app.listen(PORT, () => {
    process.stdout.write('server running on port ' + 8000)
})