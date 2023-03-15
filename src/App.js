import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import LoginPage from './pages/Login';
import FoodPage from './pages/Food';
import StuffPage from './pages/Stuff';
import NotFound from './pages/NotFound'
import FoodProduct from './components/FoodProduct';
import StuffProduct from './components/StuffProduct';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <nav>
        <ul>
          <li>
            <Link to='/food'>Food</ Link>
          </li>
          <li>
            <Link to='/stuff'>Stuff</ Link>
          </li>
          <li>
            <Link to='/'>Logout</ Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/stuff" element={<StuffPage />} />
        <Route path="/food/:id" element={<FoodProduct />} />
        <Route path="/stuff/:id" element={<StuffProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
