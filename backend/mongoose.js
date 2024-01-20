const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://tleeliminator289:#todo@123@cluster0.bxrwak3.mongodb.net/?retryWrites=true&w=majority');
const todoSchema=mongoose.Schema({
    title:String,
    desctription:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoSchema);
module.exports=(
    todo
)