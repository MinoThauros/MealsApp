import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealsOverviewScreen';
import MealDetails from './screens/MealDetails';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{//setting default settings
          headerStyle:{backgroundColor:'#351401',},//check header prop for stackscreen
          headerTintColor:'white',
          contentStyle:{
            backgroundColor:'#3f2f25'//background color as a global variable no longer works
          }
        }}>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} options={{
            title:'All Categories',
            /**
             * headerStyle:{backgroundColor:'#351401',},//check header prop for stackscreen
            headerTintColor:'white',
            contentStyle:{
              backgroundColor:'#3f2f25'//background color as a global variable no longer works
            }
             */
            
            
          }}/>
          {/**Every stack object is predefined as sub elements of stacknavigator
           * The name will reference the component
           * a navigate prop is passed to the component; we latch on that prop to navigate
           * 
           * How it works:
           * a) the stack is defined here; this doesn't enable navigation
           * b) we create a bijection between name and coomponent here, this enables naviation between stackscreen objects;
           *    ->a navigation object is also given to the component through the the Stack.Screen component
           * c) The component passes a previously defined name to the component's navigate prop object in order to navigate the stack
           * 
           * Priority:
              Out of the box, the top-most screen (i.e. the first child inside of <Stack.Navigator>) is used as the initial screen.

              I.e., in the following example, the AllProducts screen would be shown as an initial screen when the app starts:

              <Stack.Navigator>
                <Stack.Screen name="AllProducts" component={AllProducts} /> // initial screen
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
              </Stack.Navigator>
              You can therefore change the initial screen by changing the <Stack.Screen> order.
               Alternatively, there also is an initialRouteName prop that can be set on the navigator component (i.e., on <Stack.Navigator> in this case):

              <Stack.Navigator initialRouteName="ProductDetails">
                <Stack.Screen name="AllProducts" component={AllProducts} /> 
                <Stack.Screen name="ProductDetails" component={ProductDetails} /> // initial screen
              </Stack.Navigator>
           */}
          <Stack.Screen 
            name="MealsOverview" 
            component={MealOverviewScreen} 
            //options={({route,navigation}:any)=>{
            //  const catTitle:any=route.params.categoryName;
            //  //route hooks on all the instances of the navigation.navigate prop to which params are passed
            //    return {
            //      title:catTitle,
            //}}}
            />

          <Stack.Screen 
          name="MealDetails"
          component={MealDetails}
          options={{
            headerStyle:{backgroundColor:'#351401',},//check header prop for stackscreen
            headerTintColor:'white',
            contentStyle:{
              backgroundColor:'white'//background color as a global variable no longer works
            }
          }}
          />
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
