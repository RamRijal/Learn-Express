import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ReactLink from '../ReactLink';

const Register = () => {

    let [fullName, setFullname] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [dob, setDob] = useState('')
    let [gender, setGender] = useState('')

    let onSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted")

        let data = {
            fullName: fullName,
            email: email,
            password: password,
            dob: dob,
            gender: gender
        };
        // console.log(data);
        try {
            let result = await axios({
                url: "http://localhost:8000/webusers",/* From backend */
                method: 'POST',
                data: data
            })

            data = {
                ...data,
                role: 'admin'
            }
            toast.success("Admin register successful")
            setFullname('')
            setEmail('')
            setPassword('')
            setDob('')
            setGender('')
        }
        catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        
        <div className='container'>
            <ToastContainer />
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name1">Fullname:<br /></label>
                    <input
                        type='text'
                        placeholder='Eg: John'
                        id='name1'
                        // { Id ra htmlFor same value vaye Label ma click garda input focus hunxa}
                        value={fullName}
                        onChange={(e) => {
                            // console.log("Changes");
                            // console.log(e.target.value);
                            setFullname(e.target.value)
                        }} />
                </div>


                <div>
                    <label htmlFor="email">Email:<br /></label>
                    <input type='email' placeholder='Eg: abc@xyz.com' id='email' value={email}
                        onChange={(e) => {
                            // console.log("Changes");
                            // console.log(e.target.value);
                            setEmail(e.target.value)
                        }} />
                </div>

                <div>
                    <label htmlFor="pwd">Password:<br /></label>
                    <input type='password' placeholder='Eg: abc123!@#' id='pwd' value={password}
                        onChange={(e) => {
                            // console.log("Changes");
                            // console.log(e.target.value);
                            setPassword(e.target.value)
                        }} />
                </div>

                <div>
                    <label htmlFor="dob">DOB:<br /></label>
                    <input type='date' id='dob' value={dob}
                        onChange={(e) => {
                            // console.log("Changes");
                            // console.log(e.target.value);
                            setDob(e.target.value)
                        }} />
                </div>

                <div>
                    <br />
                    <label htmlFor='gender'>Select your gender:</label>
                    <br />
                    <label htmlFor='gender'>Male:</label>
                    <input
                        type='radio'
                        id='male'
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => {
                            setGender(e.target.value)
                        }}
                    />

                    <label htmlFor='gender'>Female:</label>
                    <input
                        type='radio'
                        id='female'
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => {
                            setGender(e.target.value)
                        }}
                    />
                </div>

                <button type='submit' >Proceed</button>

            </form>
        </div>
    )
}

export default Register