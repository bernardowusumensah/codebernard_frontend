import React, { useEffect, useState } from 'react';
import { fetchSkills } from '../api';

function SkillsList() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills()
      .then(data => setSkills(data))
      .catch(err => alert('Failed to load skills: ' + err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {skills.map(skill => (
        <li key={skill._id}>
          {skill.name} - {skill.level} ({skill.category})
        </li>
      ))}
    </ul>
  );
}

export default SkillsList;