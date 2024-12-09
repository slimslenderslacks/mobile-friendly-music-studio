import { useNavigate } from 'react-router-dom';

function LandingScreen() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_4275.jpg)` }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl sm:text-6xl md:text-7xl text-white font-bold 
                     tracking-wider text-center px-4
                     drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]
                     [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]
                     font-['Pixelify_Sans']">
                    What is your dream?
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