const express = require("express")
const nodemailer=require("nodemailer")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const newSchema = require('./mongo');
const FormSchema = require('./mongo').FormSchema;

const { log } = require("console");



app.get("/", cors(), (req, res) => {

})


app.post("/", async (req, res) => {
  const { email, password } = req.body

  try {
    const check = await collection.findOne({ email: email })

    if (check) {
      res.json("exist")
    }
    else {
      res.json("notexist")
    }

  }
  catch (e) {
    res.json("fail")
  }

})


app.post("/signup", async (req, res) => {
  const { email, password } = req.body

  const data = new newSchema ({
    email: email,
    password: password
  })

  try {
   
     const check = await collection.findOne({ email: email })

    if (check) {
      res.json("exist")
    } else {
      res.json("notexist")
      await collection.insertMany([data])    //this will insert the new person details in mongodb
    }
  }

  catch (e) {
    res.json("fail");
    console.log(e);
  }
})


app.post("/form", async(req,res)=>{
  const[name,email,phoneNumber]=req.body

  const Form= new FormSchema ({
    name : name ,
    email : email ,
    phoneNumber : phoneNumber
  });
  try{
  Form.save()
  res.status(200).json({ success: true, message: "Payment successful" });
} catch (error) {
  console.error("Error processing payment:", error);
  res.status(500).json({ success: false, message: "Internal server error" });
}
});

app.post("/users",(req,res)=>{
  var transporter =nodemailer.createTransport({
    service:'gmail', 
    auth:{
      user:"abhidahiwal136@gmail.com",
      pass:"sbxpcbhzktxtkjhc"
    }

  });

  var mailOptions = {
   
    from:req.body.from,
    to: 'abhidahiwal136@gmail.com',
    name:req.body.name,
    
    Message: req.body.Message, // Subject line
    html: `
    <div style="padding:10px;border-style: ridge">
    <p>You have a new contact request.</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.from}</li>
        <li>Message: ${req.body.Message}</li>
    </ul>
    `
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    res.json({ status: false, respMesg: 'Email Not Sent. Error: ' + error.message });
  } else {
    res.json({ status: true, respMesg: 'Email Sent Successfully' });
  }
});


})

app.listen(3001, () => {
  console.log('listening on port 3001');
})
