// Zona1: Importaciones componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { useState } from 'react';

import Evento from './evento';
import Congreso from './congreso';


// Zona2: Main / zona donde van los componentes

export default function Menu() {

  const [screen, setScreen] = useState('menu');


  // Pantalla de Registro de Evento
  if (screen === 'evento') {

    return (

      <SafeAreaView style={styles.safeContainer}>

        <View style={styles.header}>

          <Button
            title="← Volver al menú"
            onPress={() => setScreen('menu')}
          />

        </View>


        <View style={styles.eventoContainer}>

          <Evento />

        </View>


        <StatusBar style="auto" />

      </SafeAreaView>

    );

  }



  // Pantalla de Registro Congreso
  if (screen === 'congreso') {

    return (

      <SafeAreaView style={styles.safeContainer}>

        <View style={styles.header}>

          <Button
            title="← Volver al menú"
            onPress={() => setScreen('menu')}
          />

        </View>


        <View style={styles.eventoContainer}>

          <Congreso />

        </View>


        <StatusBar style="auto" />

      </SafeAreaView>

    );

  }



  // Menú principal

  return (

    <View style={styles.container}>


      <Text style={styles.texto}>

        Menú Principal

      </Text>



      <View style={styles.boton}>

        <Button

          title="Registro de Evento"

          onPress={() => setScreen('evento')}

        />

      </View>




      <View style={styles.boton}>

        <Button

          title="Registro Congreso"

          onPress={() => setScreen('congreso')}

        />

      </View>



      <StatusBar style="auto" />


    </View>

  );

}


// Zona3: Estilos

const styles = StyleSheet.create({


  safeContainer: {

    flex: 1,

    backgroundColor: '#fff',

  },



  header: {

    paddingTop: 10,

    paddingHorizontal: 10,

    paddingBottom: 10,

    backgroundColor: '#fff',

  },



  eventoContainer: {

    flex: 1,

  },



  container: {

    flex: 1,

    backgroundColor: '#fff',

    justifyContent: 'center',

    alignItems: 'center',

  },



  texto: {

    fontSize: 22,

    fontWeight: 'bold',

    marginBottom: 25,

  },



  boton: {

    width: '80%',

    marginVertical: 10,

  },


});