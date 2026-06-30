import { useState } from 'react';
import {StyleSheet, Text, View, Button, ImageBackground,Image} from 'react-native';

export default function ImageBackgroundSplashScreen() {

  const [imageIndex, setImageIndex] = useState(0);

  const imagenes = [
    require('../assets/BP.jpg'),
    require('../assets/foto.jpg'),
    require('../assets/adaptive-icon.png'),
  ];

  return (
    <ImageBackground
      source={imagenes[imageIndex]}
      style={styles.contenedor}
      imageStyle={styles.imagen}
      blurRadius={5}
    />
  
  );
}