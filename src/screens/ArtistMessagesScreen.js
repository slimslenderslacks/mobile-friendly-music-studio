import React from 'react';

function ArtistMessagesScreen() {
    return (
        <div className="artist-messages-screen">
            <h1>Messages</h1>

            <div className="messages-container">
                {/* Conversations List */}
                <div className="conversations-list">
                    <h2>Conversations</h2>
                    <div className="conversation-items">
                        {/* Add conversation items here */}
                        <p>Your conversations will appear here</p>
                    </div>
                </div>

                {/* Message View */}
                <div className="message-view">
                    <div className="message-header">
                        <h2>Select a conversation</h2>
                    </div>

                    <div className="messages-list">
                        {/* Messages will be displayed here */}
                    </div>

                    {/* Message Input */}
                    <div className="message-input">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="message-text-input"
                        />
                        <button className="send-button">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtistMessagesScreen; 