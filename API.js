const express = require("express")
const app = express()
const bodyP = require("body-parser")
const compiler=require("compilex")
const options={stats:true}
compiler.init(options)
app.use(bodyP.json())
app.use("/codemirror-5.65.15",express.static("D:/Online Compiler/codemirror-5.65.15"))
app.get("/",function(req, res){
    res.sendFile("D:/ONLINE COMPILER/index.html")
})

app.post("/compile",function(req,res){
    var code =req.body.code
    var input=req.body.input
    var lang=req.body.lang
if(lang == "Python")   
{ 
    if(!input){
    var envData = { OS : "windows"}; 
      compiler.compilePython( envData , code , function(data){
    
        if(data.output)
        {
            res.send(data);

        }
        else{
            res.send({output:"Error Please Check the Code "})
        }
    });   
    }
    else 
    {
        var envData = { OS : "windows"}; 
   
    compiler.compilePythonWithInput( envData , code , input ,  function(data){
        if(data.output)
        {
            res.send(data);

        }
        else{
            res.send({output:"Error Please Check the Code"})
        }      
        
    });
    }
}

})



app.listen(8000)
