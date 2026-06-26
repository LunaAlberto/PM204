// Zona1: Importaciones componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, Button,Alert,ScrollView } from 'react-native';

import { useState } from 'react';


// Zona2: Main / zona donde van los componentes

export default function Evento() {

  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);


  const registrarEvento = () => {

    if (
      nombre === '' ||
      carrera === '' ||
      semestre === ''
    ) {

      Alert.alert(
        'Error',
        'No se permiten campos vacíos'
      );

      return;
    }


    if (isNaN(semestre)) {

      Alert.alert(
        'Error',
        'El semestre debe ser numérico'
      );

      return;
    }


    Alert.alert(
      'Registro realizado',
      `Nombre: ${nombre}
      
Carrera: ${carrera}

Semestre: ${semestre}

Taller: ${taller ? 'Sí' : 'No'}

Constancia: ${constancia ? 'Sí' : 'No'}

Deportes: ${deportes ? 'Sí' : 'No'}`
    );

  };


  return (

    <ScrollView style={styles.container}>


      <Text style={styles.titulo}>
        Registro de Evento Universitario
      </Text>


      <Text style={styles.label}>
        Nombre completo
      </Text>

      <TextInput

        style={styles.input}

        placeholder="Ejemplo: Alberto"

        value={nombre}

        onChangeText={setNombre}

      />



      <Text style={styles.label}>
        Carrera
      </Text>


      <TextInput

        style={styles.input}

        placeholder="Ejemplo: ISC"

        value={carrera}

        onChangeText={setCarrera}

      />



      <Text style={styles.label}>
        Semestre
      </Text>


      <TextInput

        style={styles.input}

        placeholder="Ejemplo: 9"

        value={semestre}

        onChangeText={setSemestre}

        keyboardType="numeric"

      />



      <Text style={styles.label}>
        ¿Asistirá al taller?
      </Text>


      <Switch

        value={taller}

        onValueChange={setTaller}

      />



      <Text style={styles.label}>
        ¿Requiere constancia?
      </Text>


      <Switch

        value={constancia}

        onValueChange={setConstancia}

      />



      <Text style={styles.label}>
        ¿Participará en actividades deportivas?
      </Text>


      <Switch

        value={deportes}

        onValueChange={setDeportes}

      />



      <View style={styles.boton}>

        <Button

          title="Enviar Registro"

          onPress={registrarEvento}

        />

      </View>



      <StatusBar style="auto" />


    </ScrollView>

  );

}



// Zona3: Estilos

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: 'rgb(255,255,255)',

    padding: 30,

  },


  titulo: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 20,

    textAlign: 'center',

  },


  label: {

    fontSize: 16,

    marginTop: 15,

    marginBottom: 5,

  },


  input: {

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: 8,

    padding: 12,

  },


  boton: {

    marginTop: 30,

    marginBottom: 30,

  },


});