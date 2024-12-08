import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "./index.css"
import './App.css';

// Landing Screen (current content)
function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/IMG_9909.jpg)` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl text-white font-bold 
                     tracking-wider text-center px-4 mb-12
                     drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]
                     [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]
                     font-['Pixelify_Sans']">
          What is your dream?
        </h2>

        <div className="space-y-4 flex flex-col items-center mt-8">
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

      <div className="min-h-screen bg-black/50">
        <header className="bg-white/80 backdrop-blur-sm shadow relative z-10">
          <div className="max-w-7xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:px-8">
            <h1 className="text-xl sm:text-3xl font-bold text-gray-900 truncate font-['Pixelify_Sans']">
              Mobile Friendly Music Studio
            </h1>
          </div>
        </header>
      </div>
    </div>
  );
}

// Main App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/artist" element={<ArtistScreen />} />
        <Route path="/studio-owner" element={<StudioOwnerScreen />} />
        <Route path="/artist/profile" element={<ArtistProfileScreen />} />
        <Route path="/artist/booking" element={<ArtistBookingScreen />} />
        <Route path="/artist/schedule" element={<ArtistScheduleScreen />} />
        <Route path="/artist/payment" element={<ArtistPaymentScreen />} />
        <Route path="/studio/messages" element={<StudioMessagesScreen />} />
        <Route path="/studio/files" element={<StudioFilesScreen />} />
        <Route path="/studio/Photo" element={<StudioPhotoScreen />} />
      </Routes>
    </Router>
  );
}

// Placeholder screens (we'll implement these next)
function ArtistScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')} className="btn-back">Back</button>
      <div>Artist Screen</div>
    </div>
  );
}

function StudioOwnerScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/IMG_9909.jpg)` }}>
      <div className="min-h-screen bg-black/50">

        <button
          onClick={() => navigate('/')}
          className="btn-back">
          Back
        </button>

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

function ArtistProfileScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/artist')} className="btn-back">Back</button>
      <div>Artist Profile Screen</div>
    </div>
  );
}

function ArtistBookingScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/artist')} className="btn-back">Back</button>
      <div>Artist Booking Screen</div>
    </div>
  );
}

function ArtistScheduleScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/artist')} className="btn-back">Back</button>
      <div>Artist Schedule Screen</div>
    </div>
  );
}

function ArtistPaymentScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/artist')} className="btn-back">Back</button>
      <div>Artist Payment Screen</div>
    </div>
  );
}

function StudioMessagesScreen() {
  return <div>Studio Messages Screen</div>;
}

function StudioFilesScreen() {
  return <div>Studio Availability Screen</div>;
}

function StudioPhotoScreen() {
  return <div>Studio Bookings Screen</div>;
}

export default App;
