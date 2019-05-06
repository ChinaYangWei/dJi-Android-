const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/one_product",(req,res)=>{
  pool.query("SELECT * FROM dji_product WHERE product_ify='灵眸 Osmo'",(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});
router.get("/two_product",(req,res)=>{
  pool.query(`SELECT * FROM dji_product WHERE product_ify='"御" Mavic'`,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});
router.get("/shaky",(req,res)=>{
  pool.query("SELECT * FROM dji_shaky",(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});
router.get("/three_product",(req,res)=>{
  pool.query(`SELECT * FROM dji_product WHERE product_ify='"晓" Spark'`,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});
router.get("/favourable",(req,res)=>{
  pool.query("SELECT * FROM dji_favourable",(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});
module.exports=router;