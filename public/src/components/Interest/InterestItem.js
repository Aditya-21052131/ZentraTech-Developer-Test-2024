import React from 'react';
import axios from 'axios';

function InterestItem({ interest }) {
    const handleAccept = () => {
        axios.patch(`/api/interests/${interest.id}/`, { status: 'accepted' })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleReject = () => {
        axios.patch(`/api/interests/${interest.id}/`, { status: 'rejected' })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <p>From: {interest.sender} To: {interest.receiver} Status: {interest.status}</p>
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleReject}>Reject</button>
        </div>
    );
}

export default InterestItem;
