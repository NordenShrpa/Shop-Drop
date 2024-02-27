import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState(''); 
  const [notification, setNotification] = useState(''); 

  const handleSubscribe = (e) => {
    e.preventDefault(); 

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setNotification('Please enter a valid email address.');
      return; 
    }

    setNotification('Congratulations! You are now subscribed to our newsletter.');
    setEmail(''); 
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder='Your Email id'
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {notification && <p className="notification">{notification}</p>}
    </div>
  );
};

export default NewsLetter;
