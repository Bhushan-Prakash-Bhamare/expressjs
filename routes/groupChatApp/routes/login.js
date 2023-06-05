const express=require('express');
const fs=require('fs');

const router=express.Router();

router.get('/login',(req,res,next)=>{
    res.send('<form action="/" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"  method="GET"><input type="text" name="username" placeholder="username" id="username"><br><button type="submit">Login</button></form>');

});

module.exports=router;