const express=require("express")
const router=express.Router()
const Product=require("../model/product")

router.get("/", async (req, res)=>{
    try {
        const products=await Product.find({}).lean()
        res.render("display", {products})
        
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
   
})
router.get("/add", (req, res)=>{
    res.render("add")
})

router.get("/cart", (req, res)=>{
    res.render("cart")
})

router.get("/checkout", (req, res)=>{
    res.render("checkout")
    
})

router.post("/", async (req, res)=>{
    try {
        await Product.create(req.body)
        res.status(201).send({msg:"Product created succesfully"})
    } catch (error) {
        res.status(500).send({msg:error})
    }

})

router.put("/update/:id", async (req, res)=>{
    try {
        let product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
        });
        if (product) {
            res.status(200).send({msg:"Products updated succesfully"})
            res.redirect("/")
        }

    } catch (error) {
        res.status(404).send({msg:"Products cannot be found"})
    }
})

router.delete("/:id", async (req, res)=>{
    let product= await Product.findById(req.params.id).lean()
    try {
        if (product) {
            product.remove()
            res.status(200).send({msg: "Product varieties removed successfully"})
            res.redirect("/")
        }
        
    } catch (error) {
        res.status(500).send({msg:"product cannot be found"})
        
    }

})


module.exports=router