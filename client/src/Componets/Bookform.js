import React, { useState } from 'react';
import axios from 'axios';
import './bookform.css';

const FormDataForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    basicFacial: false,
    backFacial: false,
    couplesFacial: false,
    appointmentDate: '',
    appointmentTime: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Map form data keys to model column names
    const mappedData = {
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      appointmentDate: formData.appointmentDate,
      appointmentTime: formData.appointmentTime,
      basic_facial: formData.basicFacial,
      back_facial: formData.backFacial,
      couples_facial: formData.couplesFacial,
    };

    try {
      await axios.post('http://127.0.0.1:8888/form-data', mappedData);
      console.log('Form data submitted successfully');
      setSuccessMessage('Form data submitted successfully');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        basicFacial: false,
        backFacial: false,
        couplesFacial: false,
        appointmentDate: '',
        appointmentTime: '',
      });
      // You can add code here to handle a successful response
    } catch (error) {
      console.error('Failed to submit form data:', error);
      // You can add code here to handle errors
    }
  };

  return (
    <div>
   
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="basicFacial">Basic Facial:  Free</label>
        <input
          type="checkbox"
          id="basicFacial"
          name="basicFacial"
          checked={formData.basicFacial}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="backFacial">Back Facial: Free</label>
        <input
          type="checkbox"
          id="backFacial"
          name="backFacial"
          checked={formData.backFacial}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="couplesFacial">Couples Facial: Free</label>
        <input
          type="checkbox"
          id="couplesFacial"
          name="couplesFacial"
          checked={formData.couplesFacial}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="appointmentDate">Appointment Date:</label>
        <input
          type="date"
          id="appointmentDate"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="appointmentTime">Appointment Time:</label>
        <input
          type="time"
          id="appointmentTime"
          name="appointmentTime"
          value={formData.appointmentTime}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormDataForm;
