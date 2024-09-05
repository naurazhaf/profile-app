import React from 'react';
import ProfileCard from './components/ProfileForm/ProfileCard';
import ProfileForm from './components/ProfileForm/ProfileForm';
import ProfileLinks from './components/ProfileForm/ProfileLinks';


const App = () => {
  return (
    <div className="app-container">
      <ProfileCard />
      <ProfileForm />
      <ProfileLinks/>
    </div>
  );
};

export default App;