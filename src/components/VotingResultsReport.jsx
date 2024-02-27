import React from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';

const VotingResultsReport = () => {
    const generateVotingResultsReport = async () => {
        try {
            const response = await axios.get('http://localhost:3000/generate-voting-results-report', { responseType: 'arraybuffer' });
            console.log(response.data); // Log the response data to inspect it
            const buffer = Buffer.from(response.data);
            const blob = new Blob([buffer], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            window.open(url);
        } catch (error) {
            console.error('Error generating voting results report:', error);
        }
    };

    return (
        <div>
            <button onClick={generateVotingResultsReport}>Generate Voting Results Report</button>
        </div>
    );
};

export default VotingResultsReport;
