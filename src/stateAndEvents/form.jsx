import { useState } from "react";
import "./index.css";

function Form() {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const nameOnChange = (event) => {
        setName(event.target.value);
    }

    const emailOnChange = (event) => {
        setEmail(event.target.value);
    }

    const passwordOnChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className="form-container">
            <h2 className="form-heading">Form</h2>

            <div className="form-field">
                <label className="form-label">Name:</label>
                <input type="text" onChange={nameOnChange} className="form-input" />
            </div>

            <div className="form-field">
                <label className="form-label">Email:</label>
                <input type="email" onChange={emailOnChange} className="form-input" />
            </div>

            <div className="form-field">
                <label className="form-label">Password:</label>
                <input type="password" onChange={passwordOnChange} className="form-input" />
            </div>

            <button className="form-button">Submit</button>
        </div>
    );
}

export default Form;