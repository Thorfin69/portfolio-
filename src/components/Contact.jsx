import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First name is required.";
    if (!formData.lastName) errors.lastName = "Last name is required.";
    if (!formData.mobileNumber) errors.mobileNumber = "Mobile number is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm());
    
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      console.log('Form submitted:', formData);
      // Here you would typically send the data to a server
      setTimeout(() => {
        setIsSubmitting(false); // Simulate server response
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          mobileNumber: '',
          email: '',
          message: ''
        }); // Reset form
      }, 2000);
    }
  };

  return (
    <section id='contact' className="bg-gray-900 text-white py-16">
      <div className=" min-h-screen  container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Contact <span className="text-cyan-400">Me!</span>
        </h2>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`bg-gray-800 border border-gray-700 text-white rounded-md p-2 w-full ${formErrors.firstName ? 'border-red-500' : ''}`}
              />
              {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`bg-gray-800 border border-gray-700 text-white rounded-md p-2 w-full ${formErrors.lastName ? 'border-red-500' : ''}`}
              />
              {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mob. Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className={`bg-gray-800 border border-gray-700 text-white rounded-md p-2 w-full ${formErrors.mobileNumber ? 'border-red-500' : ''}`}
              />
              {formErrors.mobileNumber && <p className="text-red-500 text-sm">{formErrors.mobileNumber}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`bg-gray-800 border border-gray-700 text-white rounded-md p-2 w-full ${formErrors.email ? 'border-red-500' : ''}`}
              />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`bg-gray-800 border border-gray-700 text-white rounded-md p-2 w-full ${formErrors.message ? 'border-red-500' : ''}`}
              rows={6}
            />
            {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
          </div>
          <button 
            type="submit" 
            className={`bg-cyan-400 text-gray-900 hover:bg-cyan-300 py-2 px-4 rounded-md font-bold transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
