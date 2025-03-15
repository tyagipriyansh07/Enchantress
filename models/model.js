const { default: mongoose, model } = require("mongoose");
const { isInt16Array } = require("util/types");


let schema = mongoose.Schema({
    productimage: {type:String,required:true},
    price: {type:String,required:true},
    description: {type:String,required:true},
    title: {type:String,required:true,unique:true}
   
})

let productdetails = new mongoose.model("productdetails",schema)

saveDoc=()=>{
    let p1= new productdetails({
        productimage :"../images/cover8.png",
        price:"999",
        description:"loremismavofcwev sewdocfvidsnmkcovwdgvm sdocadmfcdeosamfmcew",
        title:"White Pearl Earrings"
    })
    p1.save()
}

module.exports=saveDoc