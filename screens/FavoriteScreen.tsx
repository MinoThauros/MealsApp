import { Text, View, StyleSheet,
        Image, Platform, ScrollView, Button } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";


const FavortieScreens=({navigation,route}:any):any=>{
    const favoriteMealsContext=useContext(FavoritesContext);
    const favoriteMeals:string[]=favoriteMealsContext.ids;//contains the array of ids
    const favMeals:Meal[]=MEALS.filter((meal:Meal)=>favoriteMeals.includes(meal.id))
    
    return favMeals.map((meal)=><Text key={meal.title}>{meal.title}</Text>)
};

export default FavortieScreens