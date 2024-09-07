import React, { useState } from 'react';
import './ProfileLinks.css'; 

const ProfileLinks = ({ formData, setFormData }) => {
  const [links, setLinks] = useState({
    facebook: formData.externalLinks?.facebook || '',
    twitter: formData.externalLinks?.twitter || '',
    blogger: formData.externalLinks?.blogger || '',
    googlePlus: formData.externalLinks?.googlePlus || '',
    linkedin: formData.externalLinks?.linkedin || '',
    website: formData.externalLinks?.website || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLinks({ ...links, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      externalLinks: links,
    }));
  };

  return (
    <form className="external-links-form" onSubmit={handleSubmit}>
      <h2>Your External Links</h2>

      <label>Facebook Username:</label>
      <input
        type="text"
        name="facebook"
        value={links.facebook}
        onChange={handleChange}
        placeholder="Enter your Facebook username"
      />

      <label>Twitter Username:</label>
      <input
        type="text"
        name="twitter"
        value={links.twitter}
        onChange={handleChange}
        placeholder="Enter your Twitter username"
      />

      <label>Blogger Username:</label>
      <input
        type="text"
        name="blogger"
        value={links.blogger}
        onChange={handleChange}
        placeholder="Enter your Blogger username"
      />

      <label>Google+ ID:</label>
      <input
        type="text"
        name="googlePlus"
        value={links.googlePlus}
        onChange={handleChange}
        placeholder="Enter your Google+ ID"
      />

      <label>LinkedIn Username:</label>
      <input
        type="text"
        name="linkedin"
        value={links.linkedin}
        onChange={handleChange}
        placeholder="Enter your LinkedIn username"
      />

      <label>Website Domain:</label>
      <input
        type="text"
        name="website"
        value={links.website}
        onChange={handleChange}
        placeholder="Enter your website domain"
      />

      <button type="submit" className="submit-btn">Save & Update</button>
    </form>
  );
};

export default ProfileLinks;
