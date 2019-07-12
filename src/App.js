import React from 'react';
import './App.css';
import { TwitchComponent } from './twitch/twitch.component';
import { RssComponent } from './rss/rss.component';

function App() {
  return (
    <div>
      {/*
      <TwitchComponent></TwitchComponent>
      */}
      <RssComponent></RssComponent>
    </div>
  );
}

export default App;
