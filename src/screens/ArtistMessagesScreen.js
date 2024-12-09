import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

function ArtistMessagesScreen() {
    const navigate = useNavigate();

    const messages = [
        {
            studio: "Suitcase Studios",
            message: "Hey, do you guys have availability for Monday around 5pm?",
            send: true
        },
        {
            studio: "CROSSFIRE STUDIOS",
            message: "Yo, just wanted to give you a heads up that we will be closed this weekend!",
            send: false
        },
        {
            studio: "SOUND LAB STUDIO 15",
            message: "Hey man, your song that you recorded with us last week is all done! Check your work.",
            send: false
        }
    ];

    return (
        <div className="bg-image"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_1111.png)` }}>
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
                            <div key={index} className="Suitcase-Studios">
                                <h3 className="Studio-name">{msg.studio}</h3>
                        
                                <div className="TEXTBOX">

                                <p className={msg.send ? "sending-in-textbox" : "writing-in-textbox"}>
                                        {msg.message}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ArtistMessagesScreen; 