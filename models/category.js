const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        name : { type : String, },
        category : { type : String },
        subCategory : [
            
            {
                subCategoryName:{
                    type : String,
                },
                product : 
                    {
                        productId :  {
                            type : String,
                        },
                        productName :  {
                            type : String,
                        },
                        quantity : {
                            type : Number,
                            default : 1
                        },
                        
                    }
                
            }
        ],
        
        amount : { type:Number, required:true},
        // address : { type:Object },
        // status : { type:String, default : "pending"}
    },
    {timestamps:true}
)

module.exports = mongoose.model("Product", productSchema)