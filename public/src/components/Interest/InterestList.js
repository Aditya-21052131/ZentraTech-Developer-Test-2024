import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InterestList() {
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        axios.get('/api/interests/')
            .then(response => {
                setInterests(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <ul>
            {interests.map(interest => (
                <li key={interest.id}>
                    From: {interest.sender} To: {interest.receiver} Status: {interest.status}
                </li>
            ))}
        </ul>
    );
}

export default InterestList;
