import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export default function Splash({ onFinish }) {
  useEffect(() => {
    async function preparar() {
      await new Promise(resolve => setTimeout(resolve, 2000));
      onFinish();
    }
    preparar();
  }, []);

  return (
    <View style={styles.splash}>
      <Image source={require('../assets/wave.png')} style={styles.wave} />
      <Text style={styles.splashTitulo}>Cargando app...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  splash: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  wave: { width: 80, height: 80, marginBottom: 20 },
  splashTitulo: { fontSize: 20, fontWeight: '600', color: '#333' },
});