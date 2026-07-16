import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View } from 'react-native';

import Menu from './Screens/menu';

export default function App() {

  return (

    <View style={styles.container}>

      <Menu />

      <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
  }
});
