import React from 'react';
import ProjectsList from '../components/ProjectsList';

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <ProjectsList />
        </div>
      </div>
    </section>
  );
}