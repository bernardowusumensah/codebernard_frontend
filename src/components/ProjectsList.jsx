import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../api';

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then(data => setProjects(data))
      .catch(err => alert('Failed to load projects: ' + err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <div
          key={project._id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border border-gray-100 flex flex-col"
        >
          <h3 className="text-xl font-bold mb-2 text-blue-700">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover rounded mb-4"  />
          <p className="text-gray-600 mb-2">Technologies: </p>
          <p className="text-gray-700 mb-4">{project.technologies}</p>
          <div className="flex gap-4 mt-auto">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline font-semibold"
              >
                  Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
               Repo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;