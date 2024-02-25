// Loader.jsx
import React from 'react';
import { BarLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <BarLoader color="#3B82F6" />
        </div>
    );
};

export default Loader;
