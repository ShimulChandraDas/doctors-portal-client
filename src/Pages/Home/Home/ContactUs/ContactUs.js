import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';
import appointment from '../../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} class="hero min-h-screen bg-base-200">

            <div class="card w-full max-w-xl shadow-2xl bg-base-100">
                <div class="card-body">
                    <h4 className='text-center'>Contact Us</h4>
                    <h1 class="text-4xl text-center font-bold">Stay connected with us</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Email" class="input input-bordered" />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Subject</span>
                        </label>
                        <input type="text" placeholder="Subject" class="input input-bordered" />
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Text Area</span>
                            </label>
                            <input type="textarea" placeholder="Your message" class="input input-bordered" />
                        </div>

                    </div>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;