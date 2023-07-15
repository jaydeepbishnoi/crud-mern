const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
require("./database/config");
const Products = require("./database/product");
// const product = require("./database/product");
app.use(express.json())

app.post("/myapi", async (req, res)=>{
    let product = new Products(req.body);
    let result = await product.save();
    res.send(result);
});

app.get("/myapi", async (req,res)=>{
    let mydata = await Products.find();
    // console.log(mydata);
    res.send(mydata);
});

app.delete("/myapi/:id", async(req, res)=>{
    let product = await Products.deleteOne({_id: req.params.id});
    res.send(product);
});

app.get("/update/:_id", async (req,res)=>{
    let mydata = await Products.findOne(req.params);
    res.send(mydata);
});

app.put("/update/:_id", async (req,res)=>{
    let product = await Products.updateOne(
        req.params,
        {$set: req.body}
    );
    res.send(product);
})

app.listen(4000,()=>{
    console.log("done");
});
