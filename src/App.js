import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Import screens
import LandingScreen from './screens/LandingScreen';
import StudioOwnerScreen from './screens/StudioOwnerScreen';
import ArtistScreen from './screens/ArtistScreen';
import ArtistWorkScreen from './screens/ArtistWorkScreen';
import ArtistStudiosScreen from './screens/ArtistStudiosScreen';
import ArtistMessagesScreen from './screens/ArtistMessagesScreen';
import ArtistPaymentScreen from './screens/ArtistPaymentScreen';
import StudioOwnerMessagesScreen from './screens/StudioOwnerMessagesScreen';
import StudioOwnerFilesScreen from './screens/StudioOwnerFilesScreen';
import StudioOwnerCustomizeScreen from './screens/StudioOwnerCustomizeScreen';


// Main App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/artist" element={<ArtistScreen />} />
        <Route path="/studio-owner" element={<StudioOwnerScreen />} />
        <Route path="/studio/messages" element={<StudioOwnerMessagesScreen />} />
        <Route path="/studio/files" element={<StudioOwnerFilesScreen />} />
        <Route path="/studio/customize" element={<StudioOwnerCustomizeScreen />} />
        <Route path="/artist/work" element={<ArtistWorkScreen />} />
        <Route path="/artist/studios" element={<ArtistStudiosScreen />} />
        <Route path="/artist/messages" element={<ArtistMessagesScreen />} />
        <Route path="/artist/payment" element={<ArtistPaymentScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
