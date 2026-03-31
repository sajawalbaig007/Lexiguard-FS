import FeaturesSection from '@/components/Features';
import Footer from '@/components/Footer';
import HeroSection from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/Pricing';
import TestimonialsSection from '@/components/Testimonial';
import HowItWorksSection from '@/components/Work';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>     
            <FeaturesSection/>   
            <HowItWorksSection/>   
            <PricingSection/>
            <TestimonialsSection/> 
            <Footer/>
        </div>
    );
}

export default Page;
