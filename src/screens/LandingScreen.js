import { useNavigate } from 'react-router-dom';
import '../styles/global.css';
import '../styles/landing.css';

function LandingScreen() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_4275.jpg)` }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="landing-title">
                    What is Your Dream?
                </h2>
            </div>

            <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center space-y-4">
                <button
                    onClick={() => navigate('/artist')}
                    className="btn-primary">
                    Artist
                </button>
                <button
                    onClick={() => navigate('/studio-owner')}
                    className="btn-primary">
                    Studio Owner
                </button>
            </div>

        </div>
    );
}

export default LandingScreen; 