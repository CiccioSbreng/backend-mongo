import { useEffect, useState } from "react"
import { getAll } from "../../data/post"
import { Col, Container, Row } from "react-bootstrap"
import SinglePost from "../components/SinglePost"


function Home(){

    const [posts, setPosts] = useState()

    useEffect(() => {
        getPost()
    }, [])

    async function getPost(){
        const resultPost = await getAll()
        setPosts(resultPost.data)
    }

    return (
        <Container>
            <Row>
                {
                    posts && <>
                    {
                    posts.map(post => (
                        <Col key={post._id}>
                            <SinglePost
                            post={post}/>
                        </Col>
                    ))
                }
                    </>
                }
            </Row>
        </Container>

    )
}

export default Home