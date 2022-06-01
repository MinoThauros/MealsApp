import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <SafeAreaView>
      <CategoriesScreen/>
    </SafeAreaView>
    </>
    
    
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
