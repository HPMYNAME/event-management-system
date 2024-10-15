import React, { useEffect, useState } from 'react';

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/api/events')
            .then(response => response.json())
            .then(data => setEvents(data));
    }, []);

    return (
        <div>
            <h2>Event List</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        {event.name} - {event.dateTime}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;
