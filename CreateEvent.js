import React, { useState } from 'react';

function CreateEvent() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = { name, description, dateTime, location };

        fetch('/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event),
        }).then(() => {
            setName('');
            setDescription('');
            setDateTime('');
            setLocation('');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Event</h2>
            <input
                type="text"
                placeholder="Event Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
            />
            <button type="submit">Create Event</button>
        </form>
    );
}

export default CreateEvent;
