import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import WaterFill from './pages/WaterFill';
import Septic from './pages/Septic';
import FillDirt from './pages/FillDirt';
import Gravel from './pages/Gravel';
import Well from './pages/Well';
import Livestock from './pages/Livestock';
import Solar from './pages/Solar';
import Internet from './pages/Internet';
import Cable from './pages/Cable';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/water-fill" element={<WaterFill />} />
        <Route path="/septic" element={<Septic />} />
        <Route path="/fill-dirt" element={<FillDirt />} />
        <Route path="/gravel" element={<Gravel />} />
        <Route path="/well" element={<Well />} />
        <Route path="/livestock" element={<Livestock />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/internet" element={<Internet />} />
        <Route path="/cable" element={<Cable />} />
      </Routes>
    </Layout>
  );
}
