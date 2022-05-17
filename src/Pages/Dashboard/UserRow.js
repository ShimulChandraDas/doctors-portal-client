import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://limitless-mountain-98507.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: ` bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an Admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully Made an Admin`);
                }
            })
    }
    return (

        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className='btn btn-xs'>Remove User</button></td>


        </tr>

    );
};

export default UserRow;