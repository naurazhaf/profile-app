import React, { useState } from 'react';
import './ProfileLinks.css';

const ExternalLinksForm = () => {
  const [formData, setFormData] = useState({
    facebook: '',
    twitter: '',
    blogger: '',
    googlePlus: '',
    linkedin: '',
    website: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form className="external-links-form" onSubmit={handleSubmit}>
      <h2>Your External Links</h2>

      <label>Facebook URL:</label>
      <input
        type="url"
        name="facebook"
        value={formData.facebook}
        onChange={handleChange}
        placeholder="Paste your link here"
      />

      <label>Twitter URL:</label>
      <input
        type="url"
        name="twitter"
        value={formData.twitter}
        onChange={handleChange}
        placeholder="Paste your link here"
      />

      <label>Blogger URL:</label>
      <input
        type="url"
        name="blogger"
        value={formData.blogger}
        onChange={handleChange}
        placeholder="Paste your link here"
      />

      <label>Google+ URL:</label>
      <input
        type="url"
        name="googlePlus"
        value={formData.googlePlus}
        onChange={handleChange}
        placeholder="Paste your link here"
      />

      <label>Linkedin URL:</label>
      <input
        type="url"
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
        placeholder="Paste your link here"
      />

      <label>Website URL:</label>
      <input
        type="url"
        name="website"
        value={formData.website}
        onChange={handleChange}
        placeholder="Paste your link here"
      />

      <button type="submit" className="submit-btn">Save & Update</button>
    </form>
  );
};

export default ExternalLinksForm;
