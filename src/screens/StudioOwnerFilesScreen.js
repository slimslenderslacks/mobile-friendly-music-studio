import React from 'react';

function StudioOwnerFilesScreen() {
    return (
        <div className="studio-owner-files-screen">
            <h1>Studio Files</h1>

            <div className="files-container">
                {/* File Management Tools */}
                <div className="file-tools">
                    <button className="upload-button">Upload New Files</button>
                    <div className="file-search">
                        <input
                            type="text"
                            placeholder="Search files..."
                            className="search-input"
                        />
                    </div>
                    <select className="file-filter">
                        <option value="all">All Files</option>
                        <option value="contracts">Contracts</option>
                        <option value="releases">Release Forms</option>
                        <option value="invoices">Invoices</option>
                    </select>
                </div>

                {/* Files Grid */}
                <div className="files-grid">
                    {/* Recent Files Section */}
                    <section className="files-section">
                        <h2>Recent Files</h2>
                        <div className="files-list">
                            {/* File items will be mapped here */}
                            <div className="file-item">
                                <div className="file-icon">📄</div>
                                <div className="file-details">
                                    <h3>Sample Contract.pdf</h3>
                                    <p>Added: Jan 1, 2024</p>
                                </div>
                                <div className="file-actions">
                                    <button className="action-button">Download</button>
                                    <button className="action-button">Share</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Templates Section */}
                    <section className="files-section">
                        <h2>Templates</h2>
                        <div className="files-list">
                            {/* Template items will be mapped here */}
                            <div className="file-item">
                                <div className="file-icon">📋</div>
                                <div className="file-details">
                                    <h3>Booking Agreement Template</h3>
                                    <p>Last modified: Dec 15, 2023</p>
                                </div>
                                <div className="file-actions">
                                    <button className="action-button">Use Template</button>
                                    <button className="action-button">Edit</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Storage Usage */}
                <div className="storage-info">
                    <h3>Storage Usage</h3>
                    <div className="storage-bar">
                        <div className="storage-used" style={{ width: '45%' }}></div>
                    </div>
                    <p>4.5 GB of 10 GB used</p>
                </div>
            </div>
        </div>
    );
}

export default StudioOwnerFilesScreen; 