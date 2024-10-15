import React from 'react';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';

function App() {
    return (
        <div>
            <h1>Event Management System</h1>
            <CreateEvent />
            <EventList />
        </div>
    );
}

export default App;
