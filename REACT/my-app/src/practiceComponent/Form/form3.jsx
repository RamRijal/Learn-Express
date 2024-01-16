import React, { useState } from 'react';

const Form3 = () => {
    let onSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted")

        let data = {
            email: email,
            password: password,
            day: day,
            gender: gender
        };
        console.log(data);
    }


    let days = [
        {
            label: "Sunday",
            value: "day1",
        },
        {
            label: "Monday",
            value: "day2",
        },
        {
            label: "Tuesday",
            value: "day3",
        },
        {
            label: "Wednesday",
            value: "day4",
        },
        {
            label: "Thursday",
            value: "day5",
        },
        {
            label: "Friday",
            value: "day6",
        },
        {
            label: "Saturday",
            value: "day7",
        },
    ];

    let genders = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },

    ]
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [gender, setGender] = useState('')
    let [day, setDay] = useState('') //day is given in value as value={day }and setDay is given in the onChange in order to set the value to the prefered option setDay(e.target.value)

    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
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
                    <label>Day:</label>
                    {/* <select
                        value={day}
                        onChange={(e) => {
                            setDay(e.target.value)
                        }}>
                        <option value='Sunday'>Sunday</option>
                        <option value='Monday'>Monday</option>
                        <option value='Tuesday'>Tuesday</option>
                        <option value='Wednesday'>Wednesday</option>
                        <option value='Thursday'>Thursday</option>
                        <option value='Friday'>Friday</option>
                        <option value='Saturday'>Saturday</option>
                    </select> */}

                    <select
                        value={day}
                        onChange={(e) => {
                            setDay(e.target.value)
                        }}
                    >
                        {days.map((item, i) => (
                            <option value={item.value} >{item.label}</option>
                        ))}
                    </select>
                </div>
                {/* <div>
                    <label>Select your gender:</label>
                    <select
                        // value={gender}
                        onChange={(e) => {
                            setGender(e.target.value)
                        }}>
                        {genders.map((item, i) => {
                            return <option value={item.value}> {item.label}</option>
                        })}
                    </select>
                </div> */}

                <div>
                    <form>
                        <label htmlFor='gender'>Select your gender:</label>
                        <br />
                        <label htmlFor='gender'>Male:</label>
                        <input
                            type='radio'
                            id='male'
                            value="male"
                            checked={gender==="male"}
                            onChange={(e) => {
                                setGender(e.target.value)
                            }}
                        />

                        <label htmlFor='gender'>Female:</label>
                        <input
                            type='radio'
                            id='female'
                            value="female"
                            checked={gender==="female"}
                            onChange={(e) => {
                                setGender(e.target.value)
                            }}
                        />
                        
                    </form>
                </div>
                <button type='submit' >Proceed</button>
            </form>
        </div>

    )
}

export default Form3