let mongoose = require('mongoose')

let URI = "mongodb+srv://enchantress:priayuaki@cluster0.czik5tj.mongodb.net/test"

let connectdb = async()=>{
    try{
        let con = await mongoose.connect(URI,
            {useUnifiedTopology:true,
            useNewUrlParser: true}
            )
            console.log("Database is Connected")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb


