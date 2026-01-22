import React from 'react';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Treatments from '../components/Treatments';
import SmileAssessmentSection from '../components/SmileAssessmentSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Education from '../components/Education';
import Transformations from '../components/Transformations';
import DoctorIntro from '../components/DoctorIntro';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

const Home = () => {
    // Schema.org for Dentist / MedicalBusiness
    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "Dentist", // Using Dentist as it's more specific than MedicalBusiness for this context
        "name": "Heartstrings & Braces",
        "image": "https://heartstringsbraces.com/logo.png",
        "description": "Evidence-based orthodontics for all ages in Mumbai. Specialized in invisible aligners and advanced braces.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1, Dadi Seth Road, Walkeshwar",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400006",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "18.9551139",
            "longitude": "72.8048399"
        },
        "url": "https://heartstringsbraces.com",
        "telephone": "+918591990660",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "10:00",
                "closes": "19:00"
            }
        ],
        "sameAs": [
            "https://www.instagram.com/heartstringsbraces/"
        ]
    };

    return (
        <>
            <SEO
                title="Best Orthodontist in Mumbai | Invisible Aligners & Braces"
                description="Transform your smile with Dr. Krutika Patankar at Heartstrings & Braces. Expert care in Invisible Aligners, Metal & Ceramic Braces in Walkeshwar, Mumbai."
                keywords="orthodontist mumbai, invisible aligners, braces cost mumbai, teeth straightening, dr krutika patankar, best dentist walkeshwar"
                schema={homeSchema}
            />
            <Hero />
            <Philosophy />
            {/* On Home, we might show a summarized version or just the full sections as teasers. 
          For now, keeping the rich detail as it serves as a good overview. */}
            <Treatments />
            <SmileAssessmentSection />
            <WhyChooseUs />
            <Education />
            <Transformations />
            <DoctorIntro />
            <CTA />
        </>
    );
};

export default Home;
