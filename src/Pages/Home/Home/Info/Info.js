import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../../assets/icons/clock.svg';
import marker from '../../../../assets/icons/marker.svg';
import phone from '../../../../assets/icons/phone.svg';


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            <InfoCard bgClassName="bg-gradient-to-r from-secondary to-primary" cardDetails='Lorem Ipsum is simply dummy text of the pri' cardTitle="Opening Hours" img={clock} />
            <InfoCard bgClassName="bg-accent" cardDetails='Lorem Ipsum is simply dummy text of the pri' cardTitle="Ours Locations" img={marker} />
            <InfoCard bgClassName="bg-gradient-to-r from-secondary to-primary" cardDetails='Lorem Ipsum is simply dummy text of the pri' cardTitle="Contact Us" img={phone} />


        </div>
    );
};

export default Info;