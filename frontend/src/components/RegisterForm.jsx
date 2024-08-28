import React from 'react';
import '../components/RegisterForm.css'

const RegisterForm = ({ onClose }) => {
  return (
    <div className="popup">
      <button className="close-btn" onClick={onClose}>X</button>
      <div className="popup-register-content">
        <h2 className='register-title'><span>S</span>ign <span>U</span>p</h2>
        <form className='register-form'>
          <label htmlFor="email" className='register-label'>Email</label>
          <input type="email" id="email" name="email" placeholder='Enter Email ID' className='register-textbox' required />
          <label htmlFor="username" className='register-label'>Username</label>
          <input type="text" id="username" name="username" placeholder='Enter Username' className='register-textbox' required />
          <label htmlFor="password" className='register-label'>Password</label>
          <input type="password" id="password" name="password" placeholder='Enter Password' className='register-textbox' required />
          <button type="submit" className='register-btn'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;