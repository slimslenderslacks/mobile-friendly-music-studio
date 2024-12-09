import React from 'react';
import { useNavigate } from 'react-router-dom';

function ArtistStudiosScreen() {
    const navigate = useNavigate();
    return (
        <div
            className="bg-image"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image.png)` }}
        >
            <div className="min-h-screen bg-black/50">
                <div className="max-w-7xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:px-8 flex justify-between items-center">
                    <button
                        onClick={() => navigate('/artist')}
                        className="btn-back">
                    </button>
                </div>
                <main className="max-w-md mx-auto px-4 pt-20">
                    <div className="search-container">
                        <div className="search-box">
                            <span className="search-icon"></span>
                            <input
                                type="text"
                                placeholder="Find My Studio"
                                className="search-input"
                            />
                        </div>
                        <p className="search-disclaimer">
                            Clicking this uses external sites<br />
                            for location services
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ArtistStudiosScreen; 