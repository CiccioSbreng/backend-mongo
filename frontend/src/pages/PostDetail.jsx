import { useEffect, useState } from "react";
import { getSinglePost } from "../../data/post";
import { useParams } from "react-router-dom";
import SinglePost from "../components/SinglePost";

function PostDetail(){

    const {id} = useParams()

    const [singlePost, setSinglePost] = useState()

    useEffect(() => {
        getPost()
    }, [id])

    async function getPost() {
        const resultsPost = await getSinglePost(id)
        setSinglePost(resultsPost)
    }

    return (
        <>
            {
            singlePost && <SinglePost
            post={singlePost}
            withLinks />
            }
        </>

    )
}

export default PostDetail;