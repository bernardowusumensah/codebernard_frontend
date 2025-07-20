import React from 'react';
import BlogList from '../components/BlogList';

export default function Blog() {
  return (
    <section id="blog" className="py-16 px-6 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Developer Blog</h2>
        <p className="text-center text-gray-600 mb-8">
          Latest articles from the developer community
        </p>
        <BlogList />
      </div>
    </section>
  );
}
