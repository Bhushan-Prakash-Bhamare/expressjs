const express=require('express');
const path=require('path');
const fs=require('fs');

const rootDir=require('../util/path');
const controller=require('../controllers/success');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});
 
router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
});

router.use('/contactUs',controller.getContactUs);

module.exports=router;
