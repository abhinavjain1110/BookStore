import { Schema,model } from "mongoose";

const bookSchema=new Schema({
    name:{
        type:String,
    },
    price:{
        type:Number
    },
    category:{
        type:String
    },
    image:{
        type:String
    },
    title:{
        type:String
    },
});

const Book=model("Book",bookSchema);

export default Book;