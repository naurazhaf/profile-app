import React, { useState } from 'react';
import ProfileCard from './components/ProfileForm/ProfileCard';
import ProfileForm from './components/ProfileForm/ProfileForm';
import ProfileLinks from './components/ProfileForm/ProfileLinks';
import './App.css';  

const App = () => {
  const [formData, setFormData] = useState({
    fullName: 'Dr Strange',
    title: 'Enthusiast',
    email: 'drstrange@example.com',
    birthday: {
      day: '15',
      month: 'May',
      year: '1976',
    },
    country: 'United States',
    state: 'New York',
    postalCode: '10001',
    phoneNumber: '+1-123-456-7890',
    agreeToEmails: true,
    externalLinks: {
      facebook: '',
      twitter: '',
      blogger: '',
      googlePlus: '',
      linkedin: '',
      website: '',
    },
  });

  const [tempData, setTempData] = useState(formData);

  return (
    <div className="app-container">
      <ProfileCard formData={formData} />
      <ProfileForm tempData={tempData} setTempData={setTempData} setFormData={setFormData} />
      <ProfileLinks formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default App;
