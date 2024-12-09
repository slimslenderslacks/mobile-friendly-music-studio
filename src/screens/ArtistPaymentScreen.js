import React from 'react';
import { useNavigate } from 'react-router-dom';

function ArtistPaymentScreen() {
    const navigate = useNavigate();

    return (
        <div className="bg-image"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_1112.png)` }}>
            <div className="min-h-screen bg-black/50">
                <div className="max-w-7xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:px-8 flex items-center">
                    <button
                        onClick={() => navigate('/artist')}
                        className="btn-back">
                    </button>
                </div>
                <main className="flex flex-col items-center justify-center h-[calc(100vh-100px)] space-y-6">
                    <h2 className="payment-box">
                        Insert Card Information to make payments
                    </h2>
                    <div className="">
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Card Number:"
                                    className="payment-input"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Cardholder Name:"
                                    className="payment-input"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Expire Date (dd/mm/yyyy)"
                                    className="payment-input"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    className="payment-input"
                                />
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ArtistPaymentScreen; 