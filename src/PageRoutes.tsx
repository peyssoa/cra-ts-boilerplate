import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default PageRoutes;
