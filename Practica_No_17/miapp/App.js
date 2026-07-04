import React, { useState } from 'react';
import Splash from './Screens/Splash';
import Inicio from './Screens/inicio';

export default function App() {
  const [listo, setListo] = useState(false);

  if (!listo) {
    return <Splash onFinish={() => setListo(true)} />;
  }

  return <Inicio />;
}