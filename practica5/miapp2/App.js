//Zona1: Importaciones componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';

//Zona2: Main / zona donde van a ir los componentes
export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen />
      <StatusBar style="auto" />
    </View>
  );
}

//Zona3: Estilos y posicionamiento de los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Blanco limpio de fondo
  }
});