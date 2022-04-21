import './App.css';
import Home from './pages/home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Notifications from './pages/notifications/Notifications';
import Network from './pages/network/Network';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path='/notifications' element={<Notifications/>}/>
      <Route path="/network" element={<Network/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
