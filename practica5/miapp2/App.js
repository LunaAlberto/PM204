//Zona1: Importaciones componetes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import MenuScreen from './screens/MenuScreen';



//Zona2: Main/ zona donde van a ir los componetes
export default function App() {
  return (
    <View style={styles.container}>

      <MenuScreen></MenuScreen>

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
  }
});



