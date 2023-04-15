import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboard from '/Components/Onboard';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your apps!!</Text>
      <StatusBar style="auto" />
    </View>,
    <Onboard></Onboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
