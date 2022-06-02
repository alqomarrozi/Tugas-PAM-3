import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PageHome from './pages/Home';
import PageSearch from './pages/Search';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={PageHome} />
        <Stack.Screen name="Hasil Pencarian" component={PageSearch} />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
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
