import { Card, Button } from 'react-bootstrap';

export default function BlogCard({ post, onReadMore }) {
  return (
    <>
      {/* Image with fixed height and object-fit */}
      <div style={{ height: '220px', overflow: 'hidden', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
        <img
          src={post.image}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      <Card.Body style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: '1rem' }}>
        <Card.Title
          className="text-truncate"
          style={{ fontWeight: '600', fontSize: '1.25rem', marginBottom: '0.5rem' }}
          title={post.title}
        >
          {post.title}
        </Card.Title>

        <Card.Text
          className="text-muted"
          style={{
            flexGrow: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            fontSize: '0.95rem',
            marginBottom: '1rem',
          }}
        >
          {post.content}
        </Card.Text>

        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted" style={{ fontSize: '0.85rem' }}>
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </small>
          <Button variant="outline-primary" size="sm" onClick={() => onReadMore(post)}>
            Read More
          </Button>
        </div>
      </Card.Body>
    </>
  );
}
