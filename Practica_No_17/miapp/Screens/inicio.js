import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Alert, ImageBackground } from 'react-native';

export default function Inicio() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  const agregarLibro = () => {
    if (!titulo || !autor || !genero) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }
    setCargando(true);
    setTimeout(() => {
      setLibros([...libros, { id: Date.now().toString(), titulo, autor, genero }]);
      setTitulo(''); setAutor(''); setGenero('');
      setCargando(false);
      Alert.alert('Éxito', 'Libro guardado correctamente.');
    }, 4000);
  };

  return (
    <ImageBackground source={require('../assets/BP.jpg')} style={styles.contenedor}>
      <Text style={styles.titulo}>Catálogo de Libros</Text>
      <TextInput style={styles.input} placeholder="Título" value={titulo} onChangeText={setTitulo} />
      <TextInput style={styles.input} placeholder="Autor" value={autor} onChangeText={setAutor} />
      <TextInput style={styles.input} placeholder="Género" value={genero} onChangeText={setGenero} />
      
      <TouchableOpacity style={styles.boton} onPress={agregarLibro}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Agregar Libro</Text>
      </TouchableOpacity>

      <Text style={styles.contador}>Total de libros: {libros.length}</Text>
      {cargando && <ActivityIndicator size="large" color="#0000ff" />}

      <FlatList
        data={libros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <Text style={{fontWeight: 'bold'}}>{item.titulo}</Text>
            <Text>Autor: {item.autor}</Text>
            <Text>Género: {item.genero}</Text>
          </View>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, padding: 40 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#fff' },
  input: { backgroundColor: '#fff', padding: 10, marginBottom: 10, borderRadius: 5 },
  boton: { backgroundColor: '#021a57', padding: 15, alignItems: 'center', borderRadius: 5 },
  contador: { marginVertical: 10, fontWeight: 'bold', color: '#fff' },
  tarjeta: { backgroundColor: '#ffffffcc', padding: 10, marginVertical: 5, borderRadius: 5 }
});