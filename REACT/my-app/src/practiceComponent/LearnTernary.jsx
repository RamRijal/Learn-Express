import React from 'react'

const LearnTernary = ({ age,marks }) => {
    return (
        <div>
            {
                age < 18 ? <div>Underage</div>
                    : age >= 18 && age <= 59 ? <div>Adult</div>
                        : age > 59 && age < 100 ? <div>Old</div>
                            : null
            }

            <div>
            {
                marks < 39 ? <div>Fail</div>
                    : marks >= 40 && marks <= 59 ? <div>Third division</div>
                        : marks >=60 && marks <= 79 ? <div>First division</div>
                        : marks >=80 && marks <= 100 ? <div> Distinction</div>
                        : null
            }
            </div>
        </div>
    )
}

export default LearnTernary