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
      <Image source={require('./assets/wave.png')}/>
      <Text>Hola mundo react native</Text>
      <Text>----------------------------------</Text>
            <Saludo> </Saludo>

      <Saludo2/>
          <Text>----------------------------------</Text>



  <Perfil nombre="Alberto" carrera="ISC" materia="Movil" cuatri="9"/>
   <Text>----------------------------------</Text>
    <Perfil nombre="Diana" carrera="LAGE" materia="NOCHE" cuatri="9"/>

      <StatusBar style="auto" />
    </View>
  );
}

//Zona3: Estilos y posicionamiento de los componetes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

