import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmationModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {

    const { name, email } = deletingDoctor;

    const handelDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} is Deleted`)
                    setDeletingDoctor(null)
                    refetch();
                }
            })

    }
    return (
        <div>


            <input type="checkbox" id="Delete-Confirm_Modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-red-500 text-lg">Are You Sure user you want to delete ${name}!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button onClick={() => handelDelete()} className='btn btn-xs btn-error'>Delete</button>
                        <label htmlFor="Delete-Confirm_Modal" className="btn btn-xs">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;