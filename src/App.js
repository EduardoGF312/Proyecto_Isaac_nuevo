import './App.css';
import { BrowserRouter as Router, Routes, Switch,Route,Link } from 'react-router-dom';
import { MapContainer } from './components/mapa';
import BarraSuperior from './components/BarraSuperior';
import Home from './pages/Home';
import PDF from './components/alumno';
import { Nombre } from './pages/Nombre';
import { UTD } from './pages/UTD';
import { LOGO } from './pages/Logo';
import { Carrera } from './pages/Carrera';
import { Foto } from './pages/Foto';
import Example from './components/galeria';
import { Mockups } from './components/Mockups';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='garciaf' element={<BarraSuperior />}>
          <Route index element={<Home />} />
          <Route path='nombre' element={<Nombre />}/>
          <Route path='UTD' element={<UTD/>}/>
          <Route path='logo' element={<LOGO/>}/>
          <Route path='carrera' element={<Carrera/>}/>
          <Route path='foto' element={<Foto/>}/>
          <Route path='alumnos' element={<PDF></PDF>}/>
          <Route path='galeria' element={<Example/>}/>
          <Route path='mapa' element={<MapContainer/>}/>
          <Route path='mockup' element={<Mockups/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
