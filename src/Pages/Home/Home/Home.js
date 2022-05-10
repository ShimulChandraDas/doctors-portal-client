import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import Exceptional from './Exceptional/Exceptional';
import Info from './Info/Info';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <Exceptional />
            <MakeAppoinment />
            <Testimonial />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;