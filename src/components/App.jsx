import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import useStyles from './styles';

import Movies from './Movies/Movies';
import Actors from './Actors/Actors';
import MovieInfo from './MovieInfo/MovieInfo';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import LoreUniverse from './LoreUniverse/LoreUniverse';
import FilmIQ from './FilmIQ/FilmIQ';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInfo />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/lore" element={<LoreUniverse />} />
          <Route exact path="/filmiq" element={<FilmIQ />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
