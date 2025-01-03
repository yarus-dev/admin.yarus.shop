import { Routes, Route } from 'react-router-dom';
import Dashboard from '@/pages/dashboard';
import { app, analytics } from '@/utils/firebase';

function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  );
}

export default App;
