import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

//this component should go into the data and find the correspnding element
//an array of <Meals> object


const MealOverviewScreen=(props:any)=>{
    return (
    <View>
        <Text>Meals overview screens</Text>

    </View>)

};

export default MealOverviewScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})