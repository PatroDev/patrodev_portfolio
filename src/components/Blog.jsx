import { useState, useEffect } from 'react';
import { blogPosts } from '../utils/blog/blogPosts';
import { ExternalLink } from 'lucide-react';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const sorted = [...blogPosts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setPosts(sorted);
  }, []);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Articles & Ressources
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore les réflexions, tutoriels, et partages techniques de PatroDev.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {posts.map((post) => (
            <div
              key={post._id}
              className="group relative w-full md:w-[45%] lg:w-[30%] bg-gradient-to-br from-white to-stone-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg overflow-hidden hover:scale-[1.015] transition-all duration-300 border border-gray-200 dark:border-gray-800"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute w-full bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white px-4 py-2 flex justify-between items-center">
                  <span className="text-sm font-medium truncate">{post.title}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPost(post);
                    }}
                    className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full hover:bg-white/40 transition"
                  >
                    Lire
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                  {post.content}
                </p>

                {post.references?.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-blue-600 dark:text-blue-400">
                    {post.references.slice(0, 2).map((ref, idx) => (
                      <li key={idx}>
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {ref.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={post.references?.[0]?.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-sky-600 to-teal-500 px-4 py-2 rounded-full hover:from-sky-700 hover:to-teal-600 transition"
                >
                  <ExternalLink className="h-4 w-4" />
                  Lire l’article complet
                </a>
              </div>
            </div>
          ))}
        </div>

        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-3xl w-full overflow-y-auto max-h-[90vh] p-6 relative">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-red-500"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedPost.title}
              </h3>

              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full rounded mb-4 max-h-[300px] object-cover"
              />

              <p className="text-gray-800 dark:text-gray-300 mb-6">
                {selectedPost.content}
              </p>

              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Publié le{' '}
                {new Date(selectedPost.createdAt).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>

              <h4 className="text-md font-semibold text-gray-900 dark:text-white mt-6 mb-2">Ressources</h4>
              <ul className="list-disc list-inside text-blue-600 dark:text-blue-400 text-sm">
                {selectedPost.references?.map((ref, idx) => (
                  <li key={idx}>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
