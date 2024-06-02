import React from 'react'
import './styles/globals.css'
import Libary from './pages/library';
import MainLayout from './components/layout';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AnnalesPage from './pages/annales'
import PlaylistsPage from './pages/playlists';
import PlannerPage from './pages/planner';
import HistoryPage from './pages/history';
import HomePage from './pages/home';
function App() {
  return (
    <BrowserRouter >
      <MainLayout>
      <Routes>
          <Route path='/' element = {<HomePage />} />
          <Route path="/library" element={<Libary />} />
          <Route path = "/annales" element ={<AnnalesPage/>} />
          <Route path = "/playlists" element ={<PlaylistsPage/>} />
          <Route path = "/planner" element ={<PlannerPage/>} />
          <Route path = "/history" element ={<HistoryPage/>} />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
