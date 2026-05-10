import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/profile')
      .then(res => setProfile(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!profile) return <div className="loading">Loading Portfolio...</div>;

  return (
    <div className="portfolio-container">
      <header>
        <img src={profile.imageUrl} alt="Profile" className="profile-pic" />
        <h1>{profile.name}</h1>
        <p>{profile.address} | {profile.contact}</p>
      </header>

      <section>
        <h2>Skills</h2>
        <ul>{profile.skills.map(s => <li key={s}>{s}</li>)}</ul>
      </section>

      <section>
        <h2>Qualifications</h2>
        <ul>{profile.qualifications.map(q => <li key={q}>{q}</li>)}</ul>
      </section>

      <section>
        <h2>Hobbies</h2>
        <p>{profile.hobbies.join(", ")}</p>
      </section>
    </div>
  );
}

export default App;