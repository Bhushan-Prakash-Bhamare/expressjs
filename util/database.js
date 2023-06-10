const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','Bhush@111',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;



// SQL
// const mysql=require('mysql2');

// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-complete',
//     password:'Bhush@111'
// });

// module.exports=pool.promise();