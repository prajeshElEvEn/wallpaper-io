import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import Explore from './main/Explore';
import Error from './main/Error';
import Profile from './account/Profile';
import Signup from './account/Signup';
import Login from './account/Login';
import Settings from './account/Settings';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/404" element={<Error />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
