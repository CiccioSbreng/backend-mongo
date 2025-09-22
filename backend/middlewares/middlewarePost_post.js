import Post from "../models/Post.js";


export async function validatePost(request, response, next){
    let {title, content, author, category, readTime, cover} = request.body
    const {id} = request.params

        title = title?.trim();
        content = content?.trim();
        author = author?.toLowerCase().trim()
        category = category?.trim()
        readTime = {
            value: readTime?.value,
            unit: readTime?.unit?.trim()
        }
        cover = cover?.trim()

        if (!title || !content || !category || !readTime || !cover || !author) {
            return response.status(400).json({message: 'I campi title, author,  content, category, readTime e cover sono obbligatori.'})
        }

        const filter = { $and: [{title}] }

        if(id){
            // stiamo eseguendo una modifica del post
            filter.$and.push({_id: {$ne: id}})
        }

        const Posts = await Post.find(filter);

        if(Posts.length > 0){
            return response.status(400).json({message: 'Il titolo inserito non può essere identico a quello di un altro post.'})
        }

        next();
}