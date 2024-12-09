import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

function StudioOwnerScreen() {
    const navigate = useNavigate();

    return (
        <div className="bg-image"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_9909.jpg)` }}>
            <div className="min-h-screen bg-black/50">
                <div className="max-w-7xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:px-8 flex justify-between items-center">
                    <button
                        onClick={() => navigate('/')}
                        className="btn-back">
                    </button>
                </div>
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col items-center space-y-6">
                        <button
                            onClick={() => navigate('/studio/messages')}
                            className="btn-primary">
                            Messages
                        </button>

                        <button
                            onClick={() => navigate('/studio/files')}
                            className="btn-primary">
                            Files
                        </button>

                        <button
                            onClick={() => navigate('/studio/customize')}
                            className="btn-primary">
                            Page Customization
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default StudioOwnerScreen; 