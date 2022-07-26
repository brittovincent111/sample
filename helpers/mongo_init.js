const mongoose = require("mongoose")
const uri = "mongodb+srv://brittovincent111:br2287476@cluster0.3kqbtyn.mongodb.net/?retryWrites=true&w=majority"

 const connectDb = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    
    },()=>console.log("Mongo db connected"))
  } catch (error) {
    console.log(error.message)
  }
}

module.exports= {connectDb}