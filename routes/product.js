const express = require("express")
const router = express.Router()
const Product  = require("../models/category")

//CREATE PRODUCT
router.post("/create", async (req,res)=>{
    console.log(req.body)
    const product = new Product(req.body)
    try{
        const savedproduct  = await product.save()
            res.status(200).json(savedproduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//UPDATE PRODUCT
router.put("/update/:id", async (req,res)=>{
    console.log(req.body)
    console.log(req.params.id)
    
    try{
        const updatedProduct  = await  Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
            console.log("updateid>>>",updatedProduct)
            res.status(200).json(updatedProduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})


//FIND PRODUCT
router.get("/find/:id", async (req,res)=>{
    console.log(req.params.id)
    
    try{
        const getProduct  = await  Product.findById(req.params.id)
            console.log("product>>>",getProduct)
            res.status(200).json(getProduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//DELETE PRODUCT
router.delete("/delete/:id", async (req,res)=>{
    console.log(req.params.id)
    
    try{
        const deletedProduct  = await  Product.findByIdAndDelete(req.params.id)
            console.log("deleted pproduct>>>",deletedProduct)
            res.status(200).json(deletedProduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports = router