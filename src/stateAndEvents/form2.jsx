import {useState} from "react";
import "./form2.css";


function Form() {

    const [formData, setFormData]= useState({
        name:"",
        email:"",
        phone:"",
        password:"",
    });


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="form-container">
            <h2 className="form-heading">Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                <div className="form-field">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                 <div className="form-field">
                    <label className="form-label">Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                <div className="form-field">
                    <label className="form-label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                <button type="submit" className="form-button">Submit</button>
            </form>

            <ul>
                <li>Name: {formData.name}</li>
                <li>Email: {formData.email}</li>
                <li>Phone: {formData.phone}</li>
                <li>Password: {formData.password}</li>
            </ul>
        </div>
    );
}

export default Form;