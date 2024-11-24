import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Index from './pages/Index';
import Ajustes from './pages/menus/Ajustes';
import Dicas from './pages/menus/Dicas';
import GraficoDeSono from './pages/menus/GraficoDeSono';
import MeusDados from './pages/menus/MeusDados';
import DiarioDeSono from './pages/menus/DiarioDeSono';
import MinhasMetas from './pages/menus/MinhasMetas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pages/menus/ajustes" element={<Ajustes />} />
        <Route path="/pages/menus/dicas" element={<Dicas />} />
        <Route path="/pages/menus/grafico-de-sono" element={<GraficoDeSono />} />
        <Route path="/pages/menus/meus-dados" element={<MeusDados />} />
        <Route path="/pages/menus/diario-de-sono" element={<DiarioDeSono />} />
        <Route path="/pages/menus/minhas-metas" element={<MinhasMetas />} />
      </Routes>
    </Router>
  );
}

export default App;
