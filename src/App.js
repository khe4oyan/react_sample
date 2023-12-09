import './app.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Gribs from './pages/Gribs/Gribs';
import ROUTES from './data/routes';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />}/>
          <Route path={`${ROUTES.GRIBS}/:ind`} element={<Gribs />}/>
        </Routes>
      </div>
    </div>
  );
}
