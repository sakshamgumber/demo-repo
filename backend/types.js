const zod=require('zod');
const schema=zod.string();
const createTodo=zod.object({
    title:zod.string(),
    description:zod.string(),
})
const upateTodo=zod.object({
    id:zod.string()
})
module.exports={
    createTodo:createTodo,
    upateTodo:upateTodo
}