import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        phone: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here, using the formData state
        console.log('Form submitted:', formData);
        // Optionally, you can reset the form after submission
        setFormData({
            email: '',
            name: '',
            phone: '',
            message: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="4" required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
