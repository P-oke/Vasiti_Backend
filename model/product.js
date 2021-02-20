const mongoose=require("mongoose")

const productschema= mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },

    product_description:{
        type:String,
        required:true
    },
   
    date_uploaded:{
        type:Date
      
    },
    date_edited:{
        type:Date
    },
    product_varieties:[{
        size:String,
        color:String,
        quantity:String,
        images:[{
            image1:String,
            image2:String
        }]
    
    }]

})

module.exports=mongoose.model("product", productschema)