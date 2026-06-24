import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,TextInput, ScrollView, Alert, Platform, Button, View } from 'react-native';
import { useState } from 'react';

export default function TextInputAlertScreen() {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [comentario, setComentario] = useState('');
  const [decimal, setDecimal] = useState('');
  const [edad, setEdad] = useState('');

  const mostrarAlerta = (titulo, mensaje, botones) => {
    if (Platform.OS === 'web') {
      alert(`${titulo}\n\n${mensaje}`);
      return;
    }

    Alert.alert(titulo, mensaje, botones);
  };

  // Alerta 1
  const confirmarEnvio = () => {
    mostrarAlerta(
      'Confirmar envío',
      '¿Está seguro de confirmar el envío?',
      [
        {
          text: 'Cancelar',
          onPress: () =>
            mostrarAlerta('Cancelado', 'No se envió nada'),
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () =>
            mostrarAlerta(
              'Enviado',
              'Se ha enviado tu formulario'
            ),
        },
      ]
    );
  };

  // Alerta 2
  const validarNombre = () => {
    if (nombre === '') {
      mostrarAlerta(
        'Campo vacío',
        'Por favor escribe tu nombre'
      );
    } else {
      mostrarAlerta(
        'Nombre guardado',
        `Hola ${nombre}, tu nombre fue guardado`
      );
    }
  };

  // Alerta 3
  const validarEmail = () => {
    if (email === '') {
      mostrarAlerta(
        'Error',
        'Ingresa un email'
      );
    } else if (!email.includes('@')) {
      mostrarAlerta(
        'Error',
        'Ingresa un email válido'
      );
    } else {
      mostrarAlerta(
        'Tu email es válido',
        'Felicidades'
      );
    }
  };

  const campos = [
    { label: 'Nombre', value: nombre },
    { label: 'Email', value: email },
    { label: 'Contraseña', value: password ? 'Ingresada' : 'No ingresada' },
    { label: 'Edad', value: edad },
  ];

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.label}>Ejemplo</Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Escribe tu nombre"
        autoCapitalize="words"
        style={styles.input}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Escribe tu email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Escribe tu contraseña"
        secureTextEntry={true}
        maxLength={8}
        style={styles.input}
      />

      <Text style={styles.label}>Edad</Text>
      <TextInput
        value={edad}
        onChangeText={setEdad}
        placeholder="20"
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        value={telefono}
        onChangeText={setTelefono}
        placeholder="Aquí va tu teléfono"
        keyboardType="phone-pad"
        style={styles.input}
      />

      <Text style={styles.label}>Búsqueda</Text>
      <TextInput
        value={busqueda}
        onChangeText={setBusqueda}
        placeholder="Buscar..."
        returnKeyType="search"
        style={styles.input}
      />

      <Text style={styles.label}>Precio</Text>
      <TextInput
        value={decimal}
        onChangeText={setDecimal}
        placeholder="15.5"
        keyboardType="decimal-pad"
        style={styles.input}
      />

      <Text style={styles.label}>Comentario</Text>
      <TextInput
        value={comentario}
        onChangeText={setComentario}
        placeholder="Escribe tu comentario"
        multiline={true}
        numberOfLines={4}
        style={styles.input}
      />

      <View style={styles.botonesContainer}>

        <View style={styles.botoneWrapper}>
          <Button
            title="Validar Email"
            onPress={validarEmail}
          />
        </View>

        <View style={styles.botoneWrapper}>
          <Button
            title="Validar Nombre"
            onPress={validarNombre}
          />
        </View>

        <View style={styles.botoneWrapper}>
          <Button
            title="Enviar Formulario"
            onPress={confirmarEnvio}
          />
        </View>

      </View>

      <StatusBar style="auto" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 30,
  },

  label: {
    fontSize: 13,
    color: '#666',
    marginTop: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
  },

  botonesContainer: {
    marginTop: 20,
    gap: 8,
  },

  botoneWrapper: {
    marginBottom: 4,
  },
});