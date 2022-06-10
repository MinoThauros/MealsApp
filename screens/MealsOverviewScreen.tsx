import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import Meal from "../models/meal";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";
import { useEffect } from "react";

//this component should go into the data and find the correspnding element
//an array of <Meals> object

//we then wish to display all elements which has the correct categoryID


const MealOverviewScreen=({navigation,route}:any)=>{
    //given to the component through the Stack.Navigator
    //const routage=useRoute() as an alternative to fetching the route prop; a hook

    /** Testing:
     * const {categoryId,categoryName}=route.params;//same name
    console.log(categoryId,categoryName);
     */
    
    const {categoryId,categoryName}=route.params;//check documentation for more detail on the methods on route
    console.log(categoryId,categoryName)
    useEffect(()=>{
        navigation.setOptions(
            ({route,navigation}:any)=>{
                  //const catTitle:any=categoryName;
                  //route hooks on all the instances of the navigation.navigate prop to which params are passed
                    return {
                      title:categoryName,
                }}
        );},[categoryId,categoryName,navigation]);
        
    const renderMealItem= (itemData:any):JSX.Element=>{
        const item:Meal={...itemData.item};
        //we dont need to create a new instance unless we wanna access methods;
        //pure typechecking vs instantiation
        return <View>
            <MealItem 
            {...item}//object deconstruciton; we undo all the key value pairs
            />
        </View>
    }

    const displayedMeals:Meal[]=MEALS.filter((listedMeals:Meal)=>{
        return (listedMeals.categoryIds.indexOf(categoryId)>=0);
        //indexOf will return the index of the first element which matches the argument
        //if it doesn't exist, will return -1
    })
    return (
    <View style={styles.container}>
        <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem}/>
        {/**when passewd using flatlist, the data is encapsulated using .item */}
    </View>)

};

export default MealOverviewScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10
    }
})