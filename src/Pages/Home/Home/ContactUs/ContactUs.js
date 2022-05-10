import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';
import appointment from '../../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className="hero min-h-screen bg-base-200">

            <div className="card w-full max-w-xl shadow-2xl bg-base-100">
                <div className="card-body">
                    <h4 className='text-center'>Contact Us</h4>
                    <h1 className="text-4xl text-center font-bold">Stay connected with us</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Text Area</span>
                            </label>
                            <input type="textarea" placeholder="Your message" className="input input-bordered" />
                        </div>

                    </div>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;