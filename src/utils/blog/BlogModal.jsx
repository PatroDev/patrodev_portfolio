import { Modal } from 'react-bootstrap';

export default function BlogModal({ show, handleClose, post }) {
  if (!post) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{post.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-4">
          <img
            src={post.image}
            alt={post.title}
            className="img-fluid rounded w-100"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
        </div>

        <p className="lead mb-4">{post.content}</p>

        {post.references?.length > 0 && (
          <>
            <h5 className="mb-3">References:</h5>
            <ul className="list-unstyled">
              {post.references.map((ref, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    {ref.title} &rarr;
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="text-muted mt-4">
          Published on{' '}
          {new Date(post.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </Modal.Body>
    </Modal>
  );
}
