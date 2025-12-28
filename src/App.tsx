import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutShell from '@/components/layout/LayoutShell';
import Home from '@/pages/Home';
import About from '@/pages/About';

function App() {
  return (
    <BrowserRouter>
      <LayoutShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </LayoutShell>
    </BrowserRouter>
  );
}

export default App;
