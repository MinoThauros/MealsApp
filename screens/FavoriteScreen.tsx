import { Text, View, StyleSheet,
        Image, Platform, ScrollView, Button } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealsDisplayer from "../components/MealsList/MealsDisplayer";
import { useSelector } from "react-redux";

const FavortieScreens=({navigation}:any):any=>{
    //navigation prop is exposed to drawer navigations as well
    //const favoriteMealsContext=useContext(FavoritesContext);

    const favoriteMealIds=useSelector((state:any)=>state.favoriteMeals.ids);//selecting the desired state

    //const favoriteMeals:string[]=favoriteMealsContext.ids;//contains the array of ids


    const favMeals:Meal[]=MEALS.filter((meal:Meal)=>favoriteMealIds.includes(meal.id))
    
    return (<MealsDisplayer displayedmeals={favMeals} navigation={navigation}/>)
};

export default FavortieScreens