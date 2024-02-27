import React from 'react';
import CandidateReport from '../components/CandidateReport';
import VotingResultsReport from '../components/VotingResultsReport';

const Reports = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Generate Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Candidate Report</h3>
                    <CandidateReport />
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Voting Results Report</h3>
                    <VotingResultsReport />
                </div>
            </div>
        </div>
    );
};

export default Reports;
