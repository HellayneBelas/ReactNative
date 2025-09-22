import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ margin: 16, borderWidth: 2, borderColor: 'red', padding: 16 }}>Another text!</Text>
      <Text style={styles.titleText}>Open up App.js to start working on your app!</Text>
      <Button title='Tap me!' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    margin: 16,
    borderWidth: 2,
    padding: 16,
    borderColor: 'green'
  }
});
