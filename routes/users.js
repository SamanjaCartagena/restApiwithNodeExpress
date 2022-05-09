import express from 'express';

const router = express.Router();
//All routes in here are starting with /users
const users =[
    {
    firstName:"John",
    lastName  :"Doe",
    age :25
    },
    {
        firstName:'Jane',
        lastName:'Doe',
        age:23
    }
   ]
router.get('/', (req,res) =>{
    console.log(users)
    res.send(users);
});
router.post('/',(req,res)=>{
    console.log('Route reached')
    const user = req.body;
    users.push(user)
    res.send(`User with the namer ${user.firstName} added to the database`)
});

export default router;