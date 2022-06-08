import { View, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";

//this component should go into the data and find the correspnding element
//an array of <Meals> object

//we then wish to display all elements which has the correct categoryID


const MealOverviewScreen=({route}:any)=>{
    //given to the component through the Stack.Navigator
    //const routage=useRoute() as an alternative to fetching the route prop
    const catId:any=route.params.categoryId;//check documentation for more detail on the methods on route

    const renderMealItem= (itemData:any):JSX.Element=>{
        return <View>
            <MealItem title={itemData.item.title}/>
        </View>
    }

    const displayedMeals:Meal[]=MEALS.filter((listedMeals:Meal)=>{
        return (listedMeals.categoryIds.indexOf(catId)>=0);
        //indexOf will return the index of the first element which matches the argument
        //if it doesn't exist, will return -1
    })
    return (
    <View style={styles.container}>
        <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem}/>
    </View>)

};

export default MealOverviewScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})