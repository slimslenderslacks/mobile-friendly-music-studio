import { useNavigate } from 'react-router-dom';

function ArtistScreen() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_6647.jpg)` }}>
            <div className="min-h-screen bg-black/50">
                <div className="max-w-7xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:px-8 flex justify-between items-center">
                    <button
                        onClick={() => navigate('/')}
                        className="btn-back">
                        Back
                    </button>
                </div>
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col items-center space-y-6">
                        <button
                            onClick={() => navigate('/artist/work')}
                            className="btn-primary">
                            Your Work
                        </button>
                        <button
                            onClick={() => navigate('/artist/studios')}
                            className="btn-primary">
                            Studios
                        </button>

                        <button
                            onClick={() => navigate('/artist/messages')}
                            className="btn-primary">
                            Messages
                        </button>
                        <button
                            onClick={() => navigate('/artist/payment')}
                            className="btn-primary">
                            Payment
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ArtistScreen; 