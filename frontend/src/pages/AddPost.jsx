import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createPost } from "../../data/post";

function AddPost() {
  const [datiForm, setDatiForm] = useState({
    title: "",
    author: "",
    category: "",
    cover: "",
    readTime: {
      value: "",
      unit: "",
    },
    content: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "unit" || e.target.name === "value") {
      setDatiForm({
        ...datiForm,
        readTime: {
          ...datiForm.readTime,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setDatiForm({
        ...datiForm,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await createPost(datiForm);
  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Titolo</Form.Label>
        <Form.Control
          name="title"
          value={datiForm.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Autore</Form.Label>
        <Form.Control name="author" value={datiForm.author} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Categoria</Form.Label>
        <Form.Control name="category" value={datiForm.category} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Cover</Form.Label>
        <Form.Control name="cover" value={datiForm.cover} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tempo di lettura</Form.Label>
        <Form.Control type="number" name="value" value={datiForm.value} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Unità di misura (minuti/ore)</Form.Label>
        <Form.Control name="unit" value={datiForm.unit} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contenuto del post</Form.Label>
        <Form.Control
          name="content"
          value={datiForm.content}
          as="textarea"
          rows={3}
          onChange={handleChange}
        />
      </Form.Group>
      <Button onClick={handleSubmit}>Crea post</Button>
    </Form>
  );
}

export default AddPost;
