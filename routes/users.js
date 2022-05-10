import express from 'express';
import { uuid } from 'uuidv4';

const router = express.Router();
//All routes in here are starting with /users
let  users =[
    
   ]
router.get('/', (req,res) =>{
    console.log(users)
    res.send(users);
});
router.post('/',(req,res)=>{
    console.log('Route reached')
    const user = req.body;
    const userId=uuid();
    const userWithId ={...user, id:userId}
    users.push(userWithId)
    res.send(`User with the namer ${user.firstName} added to the database`)
});

router.get('/:id',(req,res) => {
    console.log(req.params);
    const {id} = req.params;
   const foundUser= users.find((user) =>user.id === id);
    res.send(foundUser);
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params;

    users = users.filter((user) => user.id!= id)
    res.send(`User with the id ${id} deleted from the database`)
});
router.patch('/:id',(req,res) =>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user= users.find((user) =>user.id === id);

    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(age) {
        user.age = age;
    }
    res.send(`User with ${id} has been updated`)
    

})
export default router;