import React from 'react'
import { useState } from 'react';

function Form_Validation() {
    const [First_Name, setFirstName] = useState("");
    const [Last_Name, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const [First_NameError, setFirstNameError] = useState("");
    const [Last_NameError, setLastNameError] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    const [Confirm_PasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("Title is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("Title must be 3 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Title is required!");
        } else if(e.target.value.length < 3) {
            setLastNameError("Title must be 3 characters or longer!");
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Title is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Title must be 3 characters or longer!");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Title is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Title must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("Title is required!");
        } else if(e.target.value.length < 8) {
            setConfirmPasswordError("Title must be 8 characters or longer!");
        } else {
            setConfirmPasswordError("");
        }
    }

    

    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ handleFirstName } />
                {
                    First_NameError ?
                    <p style={{color:'red'}}>{ First_NameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handleLastName} />
                {
                    Last_NameError ?
                    <p style={{color:'red'}}>{ Last_NameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={ handleEmail } />
                {
                    EmailError ?
                    <p style={{color:'red'}}>{ EmailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    PasswordError ?
                    <p style={{color:'red'}}>{ PasswordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleConfirmPassword } />
                {
                    Confirm_PasswordError ?
                    <p style={{color:'red'}}>{ Confirm_PasswordError }</p> :
                    ''
                }
            </div>
        </form>
    );
};


export default Form_Validation