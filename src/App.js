import './style/core/index.scss';
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
