// VotingNotification.jsx

import React from 'react';

const VotingNotification = ({ message, type }) => {
  return (
    <div className={`fixed bottom-0 right-0 m-4 p-4 bg-${type === 'error' ? 'red' : 'green'}-500 text-white rounded shadow-lg`}>
      <p>{message}</p>
    </div>
  );
};

export default VotingNotification;
