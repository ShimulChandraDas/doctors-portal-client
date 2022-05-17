import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const formattedDate = format(date, 'PPP');

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        //console.log(slot);


        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value

        }

        fetch(`https://limitless-mountain-98507.herokuapp.com/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.success) {
                    toast(`Appointment is set in ${formattedDate} at ${slot} `)
                }
                else {
                    toast.error(`You Already have an Appointment is set in ${data.booking?.date} at ${data.booking?.slot} `)

                }
                refetch();
                //to  close the modal
                setTreatment(null);
            });

    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-lg text-secondary">Booking for {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 mt-2 gap-4 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PPP')} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>
                                    {slot}
                                </option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;