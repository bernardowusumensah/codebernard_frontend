import React, { useEffect, useState } from 'react';
import { fetchBlogPosts } from '../api';

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts()
      .then(data => setPosts(data))
      .catch(err => console.error('Failed to load blog posts:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center">Loading blog posts...</div>;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {posts.map(post => (
        <div 
          key={post.id} 
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border border-gray-100"
        >
          {post.cover_image && (
            <img 
              src={post.cover_image} 
              alt={post.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
          )}
          <h3 className="text-xl font-bold mb-2 text-blue-700">{post.title}</h3>
          <p className="text-gray-600 text-sm mb-2">
            By {post.user.name} • {new Date(post.published_at).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4">{post.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tag_list.slice(0, 3).map((tag, idx) => (
              <span 
                key={idx}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
          <a 
            href={post.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline font-semibold"
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
