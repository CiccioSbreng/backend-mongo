import { Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SinglePost({ post, withLinks }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={post.cover}
        alt={post.title}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text
          style={{ maxHeight: "4.5rem", overflow: "hidden" }}
        >
          {post.content}
        </Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item>{post.author}</ListGroup.Item>
        <ListGroup.Item>{post.category}</ListGroup.Item>
        <ListGroup.Item>
          {post.readTime.value} {post.readTime.unit}
        </ListGroup.Item>
      </ListGroup>
      {!withLinks && (
        <Card.Body>
          <Button as={Link} to={`/posts/${post._id}`}>
            Dettagli
          </Button>
          <Button>
            Altro
          </Button>
        </Card.Body>
      )}
    </Card>
  );
}

export default SinglePost;
