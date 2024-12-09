import React from 'react';

function StudioOwnerMessagesScreen() {
    return (
        <div className="studio-owner-messages-screen">
            <h1>Studio Messages</h1>

            <div className="messages-container">
                {/* Conversations List */}
                <div className="conversations-list">
                    <h2>Artists & Inquiries</h2>

                    {/* Filter Options */}
                    <div className="filter-options">
                        <select className="conversation-filter">
                            <option value="all">All Messages</option>
                            <option value="unread">Unread</option>
                            <option value="booking">Booking Requests</option>
                            <option value="active">Active Artists</option>
                        </select>
                    </div>

                    <div className="conversation-items">
                        {/* Add conversation items here */}
                        <p>Your conversations will appear here</p>
                    </div>
                </div>

                {/* Message View */}
                <div className="message-view">
                    <div className="message-header">
                        <h2>Select a conversation</h2>
                        <div className="artist-info">
                            {/* Artist details will appear here when conversation is selected */}
                        </div>
                    </div>

                    <div className="messages-list">
                        {/* Messages will be displayed here */}
                    </div>

                    {/* Quick Responses and Message Input */}
                    <div className="message-controls">
                        <div className="quick-responses">
                            <button className="quick-response">Accept Booking</button>
                            <button className="quick-response">Request Details</button>
                            <button className="quick-response">Send Rate Card</button>
                        </div>

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
        </div>
    );
}

export default StudioOwnerMessagesScreen; 