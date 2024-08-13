import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import UserRoutes from './Routes/UserRoutes';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/*" element={<UserRoutes/>} />
      </Routes>
    </Router>
  );
}

export default App