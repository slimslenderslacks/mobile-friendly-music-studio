import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

function ArtistWorkScreen() {
    const navigate = useNavigate();

    const songs = [
        { title: "Nights Like This", status: "Finished", timeAgo: "Two days ago" },
        { title: "Reminder", status: "Edited", timeAgo: "One Week Ago" },
        { title: "Liability", status: "Edited", timeAgo: "Three days ago" }
    ];

    return (
        <div className="bg-image"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_8801.jpg)` }}>
            <div className="min-h-screen bg-black/50">
                <div className="max-w-7xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:px-8 flex justify-between items-center">
                    <button
                        onClick={() => navigate('/artist')}
                        className="btn-back">
                    </button>
                </div>
                <main className="max-w-md mx-auto px-4 pt-20">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Artist Library</h2>
                        <h3 className="text-lg mb-3">Recent Songs</h3>
                        <div className="space-y-4">
                            {songs.map((song, index) => (
                                <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                                    <div className="font-medium">{song.title}</div>
                                    <div className="text-sm text-gray-600">
                                        {song.status} {song.timeAgo}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ArtistWorkScreen; 