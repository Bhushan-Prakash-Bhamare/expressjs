const path=require('path');
const rootDir=require('../util/path');

exports.getSuccess=(req,res,next)=>{
    res.send('<h1>Form successfuly filled</h1>');
};

exports.getContactUs=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactUs.html'));
}