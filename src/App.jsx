import LandingInvitation from './components/LandingInvitation';
import { Navigate, Route, Routes } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import InvitationPage from './pages/InvitationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingInvitation />} />
      <Route path="/invitation" element={<InvitationPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
