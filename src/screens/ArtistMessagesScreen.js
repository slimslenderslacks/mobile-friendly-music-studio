import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

function ArtistMessagesScreen() {
    const navigate = useNavigate();

    const messages = [
        {
            studio: "Suitcase Studios",
            message: "Hey, do you guys have availability for Monday around 5pm?",
            unread: true
        },
        {
            studio: "CROSSFIRE STUDIOS",
            message: "Yo, just wanted to give you a heads up that we will be closed this weekend!",
            unread: false
        },
        {
            studio: "SOUND LAB STUDIO 15",
            message: "Hey man, your song that you recorded with us last week is all done! Check your work.",
            unread: false
        }
    ];

    return (
        <div className="bg-image"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_6647.jpg)` }}>
            <div className="min-h-screen bg-black/50">
                <div className="max-w-7xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:px-8 flex justify-between items-center">
                    <button
                        onClick={() => navigate('/artist')}
                        className="btn-back">
                    </button>
                </div>
                <main className="max-w-md mx-auto px-4 pt-20">
                    <div className="space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold">{msg.studio}</h3>
                                    {msg.unread && (
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-black rounded-full"></div>
                                            <div className="w-2 h-2 bg-black rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                                <p className="text-gray-600 text-sm">{msg.message}</p>
                            </div>
                        ))}
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center text-sm text-gray-600">
                            15 Messages
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ArtistMessagesScreen; 