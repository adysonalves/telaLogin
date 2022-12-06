import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icone from './src/components/Icon/User';
import FormLogin from './src/components/Form/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Icone />
      <FormLogin />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7DDD7',
    justifyContent: 'center',
    padding: 40
  },
});
