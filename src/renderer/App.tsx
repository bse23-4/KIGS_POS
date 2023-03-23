import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
}
