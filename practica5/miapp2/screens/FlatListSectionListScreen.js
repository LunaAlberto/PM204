import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function FlatListSectionListScreen() {
  return (
    <View style={styles.container}>
      <Text> Aquí va la Práctica de FlatList y Section List (Jose Angel Sanchez Linares) </Text>
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