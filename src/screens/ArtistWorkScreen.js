import React from 'react';
import { useNavigate } from 'react-router-dom';

function ArtistWorkScreen() {

    const navigate = useNavigate();
    return (
        <div
            className="bg-image"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_8801.jpg)` }}
        >
            <div className="min-h-screen bg-black/50">
                <div className="max-w-7xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:px-8 flex justify-between items-center">
                    <button
                        onClick={() => navigate('/artist')}
                        className="btn-back">
                    </button>
                </div>
                <main className="flex items-center justify-center h-[calc(100vh-100px)]">
                </main>
            </div>
        </div>
    );
}

export default ArtistWorkScreen; 