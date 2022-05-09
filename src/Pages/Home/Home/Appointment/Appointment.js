import React from 'react';
import doctor from '../../../../assets/images/doctor.png';

const Appointment = () => {
    return (
        <div>
            <section>
                <div>
                    <img src={doctor} alt="" />
                </div>
                <div>
                    <h3>Appointment</h3>
                </div>
                <div></div>
            </section>
        </div>
    );
};

export default Appointment;