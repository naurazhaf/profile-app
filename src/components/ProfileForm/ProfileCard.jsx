import React from 'react';
import './ProfileCard.css';
import avatar from '../../assets/profile.jpg';

const ProfileCard = ({ formData }) => {
  if (!formData) {
    return <p>Loading...</p>;
  }

  const { externalLinks } = formData;

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={avatar} alt="avatar" className="avatar" />
        <h2>{formData.fullName}</h2>
        <p className="title">{formData.title}</p>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <p>86</p>
          <span>posts</span>
        </div>
        <div className="stat">
          <p>1.1k</p>
          <span>messages</span>
        </div>
        <div className="stat">
          <p>4.5k</p>
          <span>members</span>
        </div>
      </div>

      <div className="profile-detail">
        <div className="detail">
          <span>Birthday</span>
          <p>{formData.birthday.day} {formData.birthday.month}, {formData.birthday.year}</p>
        </div>
        <div className="detail">
          <span>Email</span>
          <p>{formData.email}</p>
        </div>
        <div className="detail">
          <span>Phone Number</span>
          <p>{formData.phoneNumber}</p>
        </div>
        <div className="detail">
          <span>Country</span>
          <p>{formData.country}</p>
        </div>
        <div className="detail">
          <span>State</span>
          <p>{formData.state}</p>
        </div>
        <div className="detail">
          <span>Postal Code</span>
          <p>{formData.postalCode}</p>
        </div>
      </div>
      <div className="profile-links">
        {externalLinks.facebook && (
          <a href={`https://facebook.com/${externalLinks.facebook}`} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        )}
        {externalLinks.twitter && (
          <a href={`https://twitter.com/${externalLinks.twitter}`} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        )}
        {externalLinks.blogger && (
          <a href={`https://${externalLinks.blogger}.blogspot.com`} target="_blank" rel="noopener noreferrer">
            Blogger
          </a>
        )}
        {externalLinks.googlePlus && (
          <a href={`https://plus.google.com/${externalLinks.googlePlus}`} target="_blank" rel="noopener noreferrer">
            Google+
          </a>
        )}
        {externalLinks.linkedin && (
          <a href={`https://www.linkedin.com/in/${externalLinks.linkedin}`} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
        {externalLinks.website && (
          <a href={`https://${externalLinks.website}`} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        )}
      </div>

      


      <div className="profile-actions">
        <button className="btn update-pro">Update Profile</button>
        <button className="btn update">Update external link</button>
      </div>


    </div>
  );
};

export default ProfileCard;
