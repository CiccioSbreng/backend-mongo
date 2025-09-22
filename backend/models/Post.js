import mongoose, { Schema } from "mongoose";


const postsSchema = new Schema({
    category: { type: String, required: true },
    title: { type: String, required: true },
    cover: { type: String, required: true },
    readTime: {
        value: { type: Number, required: true },
        unit: { type: String, required: true }
    },
    content: { type: String, required: true},
    author: { type: String, required: true }
}, { timestamps: true })

const Post = mongoose.model('Post', postsSchema)

export default Post;