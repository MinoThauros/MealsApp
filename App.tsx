import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealsOverviewScreen';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen}/>
          {/**Every stack object is predefined as sub elements of stacknavigator
           * The name will reference the component
           * a navigate prop is passed to the component; we latch on that prop to navigate
           * 
           * How it works:
           * a) the stack is defined here; this doesn't enable navigation
           * b) we create a bijection between name and coomponent here, this enables naviation between stackscreen objects;
           *    ->a navigation object is also given to the component through the the Stack.Screen component
           * c) The component passes a previously defined name to the component's navigate prop object in order to navigate the stack
           */}
          <Stack.Screen name="MealsOverview" component={MealOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer> 
    </>
    
    
  );
}
// we had to discard safeAreaView as Navigation container already contains a nice header
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
