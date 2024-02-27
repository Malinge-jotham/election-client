import React from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';

const CandidateReport = () => {
    const generateCandidateReport = async () => {
        try {
            const response = await axios.get('http://localhost:3000/generate-candidate-report', { responseType: 'arraybuffer' });
            const buffer = Buffer.from(response.data);
            const blob = new Blob([buffer], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            window.open(url);
        } catch (error) {
            console.error('Error generating candidate report:', error);
        }
    };

    return (
        <div>
            <button onClick={generateCandidateReport}>Generate Candidate Report</button>
        </div>
    );
};

export default CandidateReport;
