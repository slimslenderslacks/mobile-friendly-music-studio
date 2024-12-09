import React from 'react';

function ArtistStudiosScreen() {
    return (
        <div className="artist-studios-screen">
            <h1>Studios</h1>
            <div className="studios-container">
                {/* Studios list section */}
                <div className="studios-list">
                    <h2>Available Studios</h2>
                    {/* Add your studios list here */}
                    <p>List of studios will be displayed here</p>
                </div>

                {/* Bookings section */}
                <div className="bookings-section">
                    <h2>My Bookings</h2>
                    {/* Add your bookings list here */}
                    <p>Your studio bookings will appear here</p>
                </div>
            </div>
        </div>
    );
}

export default ArtistStudiosScreen; 