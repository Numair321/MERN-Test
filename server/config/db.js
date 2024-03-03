import mongoose from "mongoose";

const connectToMongo = async() => {
    const res = await mongoose.connect("mongodb+srv://MERN:MERN123@mern-stack.fzicggv.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Stack")
    if(res){
        console.log("connected successfully");
    }
};   

export default connectToMongo;
