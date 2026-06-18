import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function PressableSwitchScreen() {
  return (
    <View style={styles.container}>
      <Text> Aquí va la Práctica de Pressable & switch (Diego Antonio Garcia Garcia) </Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  }
});