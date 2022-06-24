import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import Meal from "../models/meal";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealsDisplayer from "../components/MealsList/MealsDisplayer";

//this component should go into the data and find the correspnding element
//an array of <Meals> object
//we then wish to display all elements which has the correct categoryID
//need to document what each component does


//useEffect vs useLayoutEffect => same but useLayoutEffect triggered directly after DOM muation

/**
 * Component which handles displaying the meals of a certain category
 * @param {navigation} 
 * @returns 
 */
const MealOverviewScreen=({navigation,route}:any)=>{
    //given to the component through the Stack.Navigator
    //const route=useRoute() as an alternative to fetching the route prop; a hook

    /** Testing:
     * const {categoryId,categoryName}=route.params;//same name
    console.log(categoryId,categoryName);
     */
    
    const {categoryId,categoryName}=route.params;//hooks; updated everytime
    //console.log(categoryId,categoryName);
    useLayoutEffect(()=>{//instead of useEffect; triggers on DOM mutation
        navigation.setOptions({title:categoryName});},[categoryId,categoryName,navigation]);
        
    

    /**
     * Handles filtering the MEAL with adequate CategoryId's
     * @param : none
     * @return : Meal[ ]
     */
    const displayedMeals:Meal[]=MEALS.filter((listedMeals:Meal)=>{

        return (listedMeals.categoryIds.indexOf(categoryId)>=0);
        //indexOf will return the index of the first element which matches the argument
        //if it doesn't exist, will return -1
    })
    return (<MealsDisplayer displayedmeals={displayedMeals} navigation={navigation}/>)

};

export default MealOverviewScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10
    }
})