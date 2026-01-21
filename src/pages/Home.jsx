import React from 'react';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Treatments from '../components/Treatments';
import WhyChooseUs from '../components/WhyChooseUs';
import Education from '../components/Education';
import Transformations from '../components/Transformations';
import DoctorIntro from '../components/DoctorIntro';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <>
            <Hero />
            <Philosophy />
            {/* On Home, we might show a summarized version or just the full sections as teasers. 
          For now, keeping the rich detail as it serves as a good overview. */}
            <Treatments />
            <WhyChooseUs />
            <Education />
            <Transformations />
            <DoctorIntro />
            <CTA />
        </>
    );
};

export default Home;
