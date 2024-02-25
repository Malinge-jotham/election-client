// CallToAction.jsx
import React from 'react';

const CallToAction = () => {
    return (
        <section className="bg-blue-500 py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Get Involved!</h2>
                <p className="text-lg text-white">Register as a voter and exercise your right to vote.</p>
                <button className="bg-white text-blue-500 font-bold py-2 px-4 mt-4 rounded hover:bg-blue-400 hover:text-white">Register Now</button>
            </div>
        </section>
    );
};

export default CallToAction;
