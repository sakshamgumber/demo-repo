const express=require('express');
const { createTodo }=require("./types");
const { todo }=require("./mongoose");
// const { cors }=require("cors")
const app=express();
app.use(express.json());
// app.use("cors")({
//     origin:"https://localhost:5137"
// })
app.post('/postTodo',async (req,res)=>{
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if (!parsePayload){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        desctiption:createPayload.desctiption
    })
    res.json({
        msg:"Todo created"
    })
})
app.get('/gettodo',async (req,res)=>{
    const todos=todo.findOne({});
    res.json({
        todos
    })

})
app.put('/puttodo',async (req,res)=>{
    const updateTodo=req.body;
    const paresedpayload=updateTodo.safeParse(updateTodo);
    if (!paresedpayload.success){
        res.status(404).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"your todo is updated"
    })
})
app.delete('deletetodo',(req,res)=>{

})
app.listen(3000);