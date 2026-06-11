//Zona1: Importaciones componetes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Saludo}from "./components/Saludo";
import {Saludo2}from "./components/Saludo2";
import {Perfil} from "./components/Perfil";


//Zona2: Main/ zona donde van a ir los componetes
export default function App() {
  return (
    <View style={styles.container}>

  <Perfil style={styles.tarjetaVerde} nombre="Alberto" carrera="ISC" materia="Movil" cuatri="9"/>
   <Text>----------------------------------</Text>
    <Perfil style={styles.tarjetaRoja} nombre="Diana" carrera="LAGE" materia="NOCHE" cuatri="9"/>
       <Text>----------------------------------</Text>
    <Perfil style={styles.tarjetaRoja} nombre="Diana" carrera="LAGE" materia="NOCHE" cuatri="9"/>

      <StatusBar style="auto" />
    </View>
  );
}

//Zona3: Estilos y posicionamiento de los componetes

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
  },
  tarjetaVerde: {
    backgroundColor: '#8bc48b',
  },
  tarjetaRoja: {
    backgroundColor: '#b86e6e',
  }
});



