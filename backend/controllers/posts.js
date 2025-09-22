import mongoose from "mongoose"
import Post from "../models/Post.js"


export async function getAll(request, response){
    try{
        const posts = await Post.find()
        response.status(200).json({
            results: posts.lenght,
            data: posts
        })
    } catch (error){
        console.log(error)
        response.status(500).json({message: 'Errore nel recupero dei post.'})
    }
}

export async function create(request, response){
    try{
        let {title, content, author, category, readTime, cover} = request.body

        title = title?.trim();
        content = content?.trim();
        author = author?.toLowerCase().trim()
        category = category?.trim()
        readTime = {
            value: readTime?.value,
            unit: readTime?.unit?.trim()
        }
        cover = cover?.trim()

        const newPosts = new Post({title, content, author, category, readTime, cover})
        const postSaved = await newPosts.save()
        response.status(201).json(postSaved)
    } catch (error){
        console.log(error)
        response.status(500).json({message: 'Errore nella creazione del post.'})
    }
}

export async function getPost(request, response){
    try{
        const {id} = request.params;
        if (!mongoose.Types.ObjectId.isValid(id)){
            return response.status(400).json({message: 'ID non valido.'})
        }

        const post = await Post.findById(id)
        if (!post){
            return response.status(404).json({message: 'Post non trovato.'})
        }
        response.status(200).json(post)
    } catch (error){
        console.log(error)
        response.status(500).json({message: 'Errore nel recupero del post'})
    }
}

export async function edit(request, response){
    try{
        const {id} = request.params
        if (!mongoose.Types.ObjectId.isValid(id)){
            return response.status(400).json({message: 'ID non valido.'})
        }

        let {title, content, category, readTime, cover} = request.body

        title = title?.trim()
        content = content?.trim()
        category = category?.trim()
        readTime = {
            value: readTime?.value,
            unit: readTime?.unit?.trim()
        }
        cover = cover?.trim()

        const updatePost = await Post.findByIdAndUpdate(id, {
            title, content, category, readTime, cover
        },
            {
                new: true
            }
    )
    if (!updatePost) {
        return response.status(404).json({message: 'Post non trovato.'})
    }
    response.status(200).json(updatePost)
    } catch (error){
        console.log(error)
        response.status(500).json({message: 'Errore nella modifica del post.'})
    }
}

export async function remove(request, response){
    try{
        const {id} = request.params
        if (!mongoose.Types.ObjectId.isValid(id)){
            return response.status(400).json({message: 'ID non valido.'})
        }

        const deletedPost = await Post.findByIdAndDelete(id)
        if (!deletedPost){
            return response.status(404).json({message: 'Post non trovato.'})
        }
        response.status(200).json(deletedPost)
    } catch (error){
        console.log(error)
        response.status(500).json({message: "Errore nell'eliminazione del post." })
    }
}