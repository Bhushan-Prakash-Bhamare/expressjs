const express=require('express');

const path=require('path');

const rootDir=require('../util/path');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

router.post('/success',(req,res,next)=>{
    res.send('<h1>Form successfuly filled</h1>');
});

module.exports=router;
