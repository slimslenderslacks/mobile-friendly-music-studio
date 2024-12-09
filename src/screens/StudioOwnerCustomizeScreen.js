import React from 'react';

function StudioOwnerCustomizeScreen() {
    return (
        <div className="studio-owner-customize-screen">
            <h1>Customize Studio</h1>

            <div className="customize-container">
                {/* Studio Profile Section */}
                <section className="studio-profile">
                    <h2>Studio Profile</h2>
                    <div className="profile-form">
                        <div className="form-group">
                            <label>Studio Name</label>
                            <input type="text" placeholder="Enter studio name" />
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea placeholder="Describe your studio..." rows="4" />
                        </div>

                        <div className="form-group">
                            <label>Location</label>
                            <input type="text" placeholder="Studio address" />
                        </div>
                    </div>
                </section>

                {/* Studio Photos Section */}
                <section className="studio-photos">
                    <h2>Studio Photos</h2>
                    <div className="photo-upload-area">
                        <button className="upload-button">Upload Photos</button>
                        <p>Drag and drop photos here or click to upload</p>
                    </div>
                    <div className="photo-gallery">
                        {/* Photos will be displayed here */}
                    </div>
                </section>

                {/* Pricing & Availability */}
                <section className="pricing-availability">
                    <h2>Pricing & Availability</h2>
                    <div className="pricing-form">
                        <div className="form-group">
                            <label>Hourly Rate</label>
                            <input type="number" placeholder="Enter hourly rate" />
                        </div>

                        <div className="form-group">
                            <label>Minimum Booking Duration</label>
                            <select>
                                <option value="1">1 hour</option>
                                <option value="2">2 hours</option>
                                <option value="4">4 hours</option>
                                <option value="8">8 hours</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Studio Rules & Requirements */}
                <section className="studio-rules">
                    <h2>Rules & Requirements</h2>
                    <div className="rules-form">
                        <div className="form-group">
                            <label>Studio Rules</label>
                            <textarea placeholder="Enter studio rules and requirements..." rows="4" />
                        </div>
                    </div>
                </section>

                {/* Save Changes Button */}
                <div className="save-changes">
                    <button className="save-button">Save Changes</button>
                </div>
            </div>
        </div>
    );
}

export default StudioOwnerCustomizeScreen; 