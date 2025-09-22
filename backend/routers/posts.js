import express from "express";
import { create, edit, getAll, getPost, remove } from "../controllers/posts.js";
import { validatePost } from "../middlewares/middlewarePost_post.js";

const postsRouter = express.Router();

postsRouter.get('/', getAll);

postsRouter.post('/', validatePost, create);

postsRouter.get('/:id', getPost);

postsRouter.put('/:id', validatePost, edit);

postsRouter.delete('/:id', remove);


export default postsRouter;