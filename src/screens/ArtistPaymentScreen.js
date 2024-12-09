import React from 'react';

function ArtistPaymentScreen() {
    return (
        <div className="artist-payment-screen">
            <h1>Payments & Earnings</h1>

            {/* Payment Summary Section */}
            <div className="payment-summary">
                <h2>Summary</h2>
                <div className="balance-card">
                    <h3>Current Balance</h3>
                    <p className="balance-amount">$0.00</p>
                </div>
            </div>

            {/* Transaction History Section */}
            <div className="transaction-history">
                <h2>Transaction History</h2>
                <div className="transactions-list">
                    {/* Add transaction items here */}
                    <p>Your transaction history will appear here</p>
                </div>
            </div>

            {/* Payment Methods Section */}
            <div className="payment-methods">
                <h2>Payment Methods</h2>
                <div className="payment-methods-list">
                    {/* Add payment methods here */}
                    <p>Your payment methods will appear here</p>
                </div>
            </div>
        </div>
    );
}

export default ArtistPaymentScreen; 