import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LayoutShell from '@/components/layout/LayoutShell';
import Home from '@/pages/Home';
import ScrollToAnchor from '@/components/utils/ScrollToAnchor';

function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <LayoutShell>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Catch-all route to redirect back to home if path not found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </LayoutShell>
    </BrowserRouter>
  );
}

export default App;
