import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import CharacterDetails from './pages/CharacterDetails';
import CharactersList from '../src/components/CharactersList';

function App() {
  const userInSession = { name: "Andres" };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage userInSession={userInSession} />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="characters/:id" element={<CharacterDetails />} />
        <Route path="/CRUD-JSON-server" element={<CharactersList />} />
      </Routes>
    </div>
  );
}

export default App;
