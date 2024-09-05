import React from 'react';
import './ProfileCard.css'; 
import avatar from '../../assets/profile.jpg';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
          <img src={avatar} alt="avatar" className="avatar" />
        <h2>Dr Strange</h2>
        <p className="title">Enthusiast</p>
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

      <div className="profile-actions">
        <button className="btn update-pro">Update Profile</button>
        <button className="btn update">Update external link</button>
      </div>

      <div className="profile-slogan">
        <p>Your Slogan</p>
        <small>( Just start typing to edit )</small>
        <blockquote>
          Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.
        </blockquote>
      </div>
    </div>
  );
};

export default ProfileCard;
