import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Features from '../components/Features';
import CandidateInformation from '../components/CandidateInformation';
import VoterEducation from '../components/VoterEducation';
import CallToAction from '../components/CallToAction';

const Landing = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Introduction />
                <Features />
                <CandidateInformation />
                <VoterEducation />
                <CallToAction />
            </div>

        </div>
    );
};

export default Landing;
