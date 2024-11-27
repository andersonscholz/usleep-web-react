// src/App.js
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
import PrivateRoute from './components/PrivateRoute'; // Importação correta
import TestCORS from './components/TestCORS'; // Importação correta
import HistoricoSono from './pages/menus/HistoricoSono';
import MediaDeHoras from './pages/menus/MediaDeHoras';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rotas protegidas */}
        <Route
          path="/pages/menus/ajustes"
          element={
            <PrivateRoute>
              <Ajustes />
            </PrivateRoute>
          }
        />
        <Route
          path="/pages/menus/dicas"
          element={
            <PrivateRoute>
              <Dicas />
            </PrivateRoute>
          }
        />
        <Route
          path="/pages/menus/grafico-de-sono"
          element={
            <PrivateRoute>
              <GraficoDeSono />
            </PrivateRoute>
          }
        />
        <Route
          path="/pages/menus/historico-sono"
          element={
            <PrivateRoute>
              <HistoricoSono />
            </PrivateRoute>
          }
        />

        <Route
          path="/pages/menus/media-de-horas"
          element={
            <PrivateRoute>
              <MediaDeHoras />
            </PrivateRoute>
          }
        />

        <Route
          path="/pages/menus/meus-dados"
          element={
            <PrivateRoute>
              <MeusDados />
            </PrivateRoute>
          }
        />
        <Route
          path="/pages/menus/diario-de-sono"
          element={
            <PrivateRoute>
              <DiarioDeSono />
            </PrivateRoute>
          }
        />
        <Route
          path="/pages/menus/minhas-metas"
          element={
            <PrivateRoute>
              <MinhasMetas />
            </PrivateRoute>
          }
        />

        {/* Nova Rota para TestCORS */}
        <Route
          path="/test-cors"
          element={
            <PrivateRoute>
              <TestCORS />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
