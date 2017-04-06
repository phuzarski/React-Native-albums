//index.ios.js - place code in here for ios

// import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a Component
const App = () => (
  <Header />
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
