import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        </Routes>
      </LayoutShell>
    </BrowserRouter>
  );
}

export default App;
