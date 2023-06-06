const express=require('express');

const path=require('path');

const rootDir=require('../util/path');
const controller=require('../controllers/success');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

router.post('/success',controller.getSuccess);

module.exports=router;
