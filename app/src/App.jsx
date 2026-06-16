import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Storefront from './pages/Storefront';
import MobilePreview from './pages/MobilePreview';
import DesignSystem from './pages/DesignSystem';
import AgeGate from './components/AgeGate';
import './styles/tokens.css';
import './styles/storefront.css';
import './styles/mobile.css';

const App = () => (
  <BrowserRouter>
    <AgeGate>
      <Routes>
        <Route path="/" element={<Storefront />} />
        <Route path="/mobile" element={<MobilePreview />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
    </AgeGate>
  </BrowserRouter>
);

export default App;
