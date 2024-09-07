import React from 'react';
import './ProfileForm.css';

const ProfileForm = ({ tempData, setTempData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setTempData({ ...tempData, [name]: checked });
    } else if (name === 'day' || name === 'month' || name === 'year') {
      setTempData({
        ...tempData,
        birthday: { ...tempData.birthday, [name]: value }
      });
    } else {
      setTempData({ ...tempData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(tempData);
    console.log('Form submitted:', tempData);
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h2>Edit Your Personal Settings</h2>
      
      <label>Full Name</label>
      <input
        type="text"
        name="fullName"
        value={tempData.fullName}
        onChange={handleChange}
        placeholder="Enter your full name"
      />

      <label>Title</label>
      <input
        type="text"
        name="title"
        value={tempData.title}
        onChange={handleChange}
        placeholder="Enter your title here"
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={tempData.email}
        onChange={handleChange}
        placeholder="Enter your email here"
      />

      <label>Birthday</label>
      <div className="birthday">
        <select name="day" value={tempData.birthday.day} onChange={handleChange}>
          <option value="">Day</option>
          {[...Array(31)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <select name="month" value={tempData.birthday.month} onChange={handleChange}>
          <option value="">Month</option>
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, i) => (
            <option key={i} value={month}>
              {month}
            </option>
          ))}
        </select>

        <select name="year" value={tempData.birthday.year} onChange={handleChange}>
          <option value="">Year</option>
          {Array.from({ length: 100 }, (_, i) => 2023 - i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <label>Country</label>
      <input
        type="text"
        name="country"
        value={tempData.country}
        onChange={handleChange}
        placeholder="Enter your country"
      />

      <label>State/Province/Region</label>
      <input
        type="text"
        name="state"
        value={tempData.state}
        onChange={handleChange}
        placeholder="Type here"
      />

      <label>Postal Code</label>
      <input
        type="text"
        name="postalCode"
        value={tempData.postalCode}
        onChange={handleChange}
        placeholder="Type here"
      />

      <label>Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        value={tempData.phoneNumber}
        onChange={handleChange}
        placeholder="Type here"
      />

      <div className="checkbox">
        <input
          type="checkbox"
          name="agreeToSubmit"
          checked={tempData.agreeToSubmit}
          onChange={handleChange}
        />
        <label>I understand the Terms and Conditions</label>
      </div>

      <button type="submit" className="submit-btn" disabled={!tempData.agreeToSubmit}>
        Update Information
      </button>
    </form>
  );
};

export default ProfileForm;
