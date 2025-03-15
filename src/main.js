let express =  require("express")
let path = require("path")
let hbs = require("hbs")
let app = express()
// let ConnectDB = require("../Connection/ConnectDB")
// let saveDoc = require("../models/model")
// saveDoc()

app.set("view engine","hbs")


app.use(express.static(path.join(__dirname,"../public")));
let regex = /\w/
app.get("/",(req,res)=>{
    res.render("homepage")
})
app.get("/homepage",(req,res)=>{
    res.render("homepage")
})
app.get("/bracelets",(req,res)=>{
    res.render("bracelets")
})
app.get("/earings",(req,res)=>{
    res.render("earings")
})
app.get("/necklace",(req,res)=>{
    res.render("necklace")
})
app.get("/rings",(req,res)=>{
    res.render("rings")
})
app.get("/categories",(req,res)=>{
    res.render("categories")
})
app.get("/cart",(req,res)=>{
    res.render("cart")
})
app.get("/probrac",(req,res)=>{
    res.render("probrac")
})
app.get("/proear",(req,res)=>{
    res.render("proear")
})
app.get("/proneck",(req,res)=>{
    res.render("proneck")
})
app.get("/prorings",(req,res)=>{
    res.render("prorings")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/check",(req,res)=>{
    res.render("check")
})
app.get(regex,(req,res)=>{
    res.render("error")
})
app.set("views",path.join(__dirname,"../views"))
hbs.registerPartials(path.join(__dirname,"../partials"))

// ConnectDB()

app.listen("3000",()=>{
    console.log("Server is Connected")
})


// let saveDoc=require("../models/model")
// saveDoc()