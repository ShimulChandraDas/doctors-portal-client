import React from 'react';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import Exceptional from './Exceptional/Exceptional';
import Info from './Info/Info';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='px-12 bg-primary-content '>
            <Banner />
            <Info />
            <Services />
            <Exceptional />
            <MakeAppoinment />
            <Testimonial />
            <ContactUs />
        </div>
    );
};

export default Home;