import express from "express";
import Product from "../Models/product.model.js";
import mongoose from "mongoose";
const router = express.Router();


router.get("/", async(_, res)=>{
    try{
        const products = await Product.find({})
        res.status(200).json({success:true, data: products})
    }catch(error){
        
        res.status(500).json({success: false, message: `server error ${error} `})
    }
})

router.get('/:id', async(req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({success: false, message: 'Invalid Id'})
    }
    try{
        const productById = await Product.findById(id);
        res.status(200).json({success: true, data: productById})
    }catch(error){
        res.status(500).json({success: false, message: 'Invalid Product ID'})
    }
})


router.put("/:id", async(req, res)=>{
    const {id} = req.params;
    const product = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false, message: 'Invalid id'})
    }
    try{
        const updateProducts = await Product.findByIdAndUpdate(id, product, {new:true})
        res.status(200).json({success: true, data: updateProducts})

    }catch(error){
        res.status(500).json({success:false, message:`server error ${error}`})
    }
})

router.post("/", async(req, res)=>{
    const product = req.body
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message:'Please provide equired Fields'})
    }
    const newProduct = new Product(product)
    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    }catch(error){
        console.log(`Error: ${error.message}`)
        res.status(500).json({success:false, message:'Sever error'})
    }
})


router.delete("/:id", async(req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({success: false, message: 'Invalid Id'})
    }
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:'Deleted Sccessfully'})

    }catch(error){
        res.status(500).json({success:false, message: 'server error', error})
    }
})



export default router;