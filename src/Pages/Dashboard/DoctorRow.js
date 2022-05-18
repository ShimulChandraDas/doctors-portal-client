import React from 'react';

const DoctorRow = ({ doctor, index }) => {
    const { name, specialty, img } = doctor;
    return (
        <tr>
            <td>{index + 1}</td>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div>
            </td>



            <td>{name}</td>
            <td>{specialty}</td>
            <td><button className='btb btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default DoctorRow;