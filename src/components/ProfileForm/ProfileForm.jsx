import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    email: '',
    birthday: {
      day: '',
      month: '',
      year: '',
    },
    country: '',
    state: '',
    postalCode: '',
    phoneNumber: '',
    agreeToEmails: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h2>Edit Your Personal Settings</h2>
      
      <label>Full Name</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Enter your full name"
      />

      <label>Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter your title here"
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email here"
      />

      <label>Birthday</label>
      <div className="birthday">
        <select name="day" value={formData.birthday.day} onChange={handleChange}>
          <option value="">Day</option>
          {[...Array(31)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <select name="month" value={formData.birthday.month} onChange={handleChange}>
          <option value="">Month</option>
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, i) => (
            <option key={i} value={month}>
              {month}
            </option>
          ))}
        </select>

        <select name="year" value={formData.birthday.year} onChange={handleChange}>
          <option value="">Year</option>
          {Array.from({ length: 100 }, (_, i) => 2023 - i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <label>Country</label>
      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Not Chosen</option>
      </select>

      <label>State/Province/Region</label>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="Type here"
      />

      <label>Postal Code</label>
      <input
        type="text"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleChange}
        placeholder="Type here"
      />

      <label>Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Type here"
      />

      <div className="checkbox">
        <input
          type="checkbox"
          name="agreeToEmails"
          checked={formData.agreeToEmails}
          onChange={handleChange}
        />
        <label>I agree to receive notification emails from Ivive</label>
      </div>

      <button type="submit" className="submit-btn">Update Information</button>
    </form>
  );
};

export default ProfileForm;
