const express=require('express');
const app = express();

app.use(express.json())
const users=[
    { id:1, username : "venki" ,password : "venki1234"},
    { id:2, username : "ram" ,password : "ram1234"},
    { id:3, username : "raju" ,password : "raju1234"},
    { id:4, username : "hari" ,password : "hari1234"},
    { id:5, username : "viraansh" ,password : "viraansh1234"},
    { id:6, username : "shashank" ,password : "shashank1234"},
    { id:7, username : "savithiri" ,password : "savithri1234"},

]







app.get('/',(req,res)=>{
    res.send(users)
})

app.get('/:id',(req,res)=>{
    const user=users.find(m=>m.id=== parseInt(req.params.id));
    console.log(user)
    res.send(user)

})
app.get('/user/:username/:password',(req,res)=>{
    const user=users.find(m=>m.username ===req.params.username && m.password ===req.params.password)
    res.send(user);
})

const port =process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});