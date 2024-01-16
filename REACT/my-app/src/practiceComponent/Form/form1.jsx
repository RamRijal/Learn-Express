import React, { useState } from 'react'
import css from './form1.css'

const Form1 = () => {

    let onSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted")

        let data = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            dob:dob,
            description:description
            
        };
        console.log(data);
    }


    let [firstname, setFirstname] = useState('')
    let [lastname, setLastname] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [dob, setDob] = useState('')
    let [description, setDescription] = useState('')

    return (



        <div className='container'>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name1">Firstname:<br /></label>
                    <input
                        type='text'
                        placeholder='Eg: John'
                        id='name1'
                        value={firstname}
                        onChange={(e) => {
                            // console.log("Changes");
                            console.log(e.target.value);
                            setFirstname(e.target.value)
                        }} />
                </div>



                <div>
                    <label htmlFor="name2">Lastname:<br /></label>
                    <input type='text' placeholder='Eg: Doe' id='name2' value={lastname}
                        onChange={(e) => {
                            // console.log("Changes");
                            console.log(e.target.value);
                            setLastname(e.target.value)
                        }} />
                </div>



                <div>
                    <label htmlFor="email">Email:<br /></label>
                    <input type='email' placeholder='Eg: abc@xyz.com' id='email' value={email}
                        onChange={(e) => {
                            // console.log("Changes");
                            console.log(e.target.value);
                            setEmail(e.target.value)
                        }} />
                </div>

                <div>
                    <label htmlFor="pwd">Password:<br /></label>
                    <input type='password' placeholder='Eg: abc123!@#' id='pwd' value={password}
                        onChange={(e) => {
                            // console.log("Changes");
                            console.log(e.target.value);
                            setPassword(e.target.value)
                        }} />
                </div>

                <div>
                    <label htmlFor="dob">DOB:<br /></label>
                    <input type='date'  id='dob' value={dob}
                        onChange={(e) => {
                            // console.log("Changes");
                            console.log(e.target.value);
                            setDob(e.target.value)
                        }} />
                </div>

                <div>
                    <label htmlFor="desc">Description:<br /></label>
                    <textarea 
                    placeholder='Your description'
                    id='desc'
                    value={description}
                        onChange={(e) => {
                            // console.log("Changes");
                            console.log(e.target.value);
                            setDescription(e.target.value)
                        }}></textarea>
                </div>

                <button type='submit' >Proceed</button>

            </form>
        </div>
    )
}

export default Form1