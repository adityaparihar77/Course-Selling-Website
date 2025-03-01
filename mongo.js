const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/course-selling-app")
.then(()=>{
    console.log("mongodb connected");
})
.catch((error) => {
    console.error("MongoDB connection failed:", error);
  })
  

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const FormSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }
})

const Payment=mongoose.model("payment",FormSchema)

const collection = mongoose.model("collection",newSchema)

module.exports={
    collection,
    Payment,
}