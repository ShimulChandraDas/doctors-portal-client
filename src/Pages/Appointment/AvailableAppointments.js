import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../Pages/Shared/Loading'
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';


const AvailableAppointments = ({ date }) => {
    //const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)


    // useEffect(() => {
    //     fetch(`https://limitless-mountain-98507.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setServices(data)
    //         })
    // }, [formattedDate])

    const formattedDate = format(date, 'PPP');

    const { data: services, isLoading, refetch } = useQuery(['/available', formattedDate], () =>
        fetch(`https://limitless-mountain-98507.herokuapp.com/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div >
            <h4 className='tex-xl text-secondary text-center font-bold my-12'>   Available Appointment on  {format(date, 'PPP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            />}
        </div>
    );
};

export default AvailableAppointments;