import React from 'react';
import Header from './componets/Header';
import Sidebar from './componets/Sidebar';
import Router from './routes';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Router />
    </>
  );
}

export default App;
