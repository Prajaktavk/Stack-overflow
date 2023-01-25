import mongoose from "mongoose";
//schema of database
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    about: {type: String },
    //array of string in tags
    tags: {type: [String] },
    joinedOn: {type: Date, default: Date.now }
})

export default mongoose.model("User", userSchema)