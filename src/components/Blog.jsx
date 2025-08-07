import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { blogPosts } from '../utils/blog/blogPosts';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const sorted = [...blogPosts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setPosts(sorted);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  const handleShow = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  return (
    <>
      <Container className="py-5 mt-5">
        <h2 className="text-center mb-5">Latest Articles</h2>
        <Row className="">
          {posts.map(post => (
            <Col md={4} lg={3} key={post._id}>
              <Card className="shadow-sm border rounded m-3 p-6 d-inline-block" style={{ width: '50%' }}>
                <Card.Img 
                  variant="top" 
                  src={post.image} 
                  alt={post.title}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h5 mb-3 font-bold">{post.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'auto',
                    textOverflow: 'ellipsis'
                  }}>
                    {post.content}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <small className="text-muted" style={{ fontSize: '0.85rem' }}>
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </small>
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      onClick={() => handleShow(post)}
                    >
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        {selectedPost && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedPost.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-100 mb-4 rounded"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              <p className="lead mb-4">{selectedPost.content}</p>
              <h5 className="mb-3">References:</h5>
              <ul className="list-unstyled">
                {selectedPost.references.map((ref, index) => (
                  <li key={index} className="mb-2">
                    <a 
                      href={ref.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      {ref.title} →
                    </a>
                  </li>
                ))}
              </ul>
              <div className="text-muted mt-4" style={{ fontSize: '0.9rem' }}>
                Published on {new Date(selectedPost.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
}
