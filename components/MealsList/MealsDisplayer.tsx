import Meal from "../../models/meal";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../MealItem";
import { useNavigation } from '@react-navigation/native';
/**
 * Takes care of displaying a list of meals;
 * Will navigate to MealDetails page while passing down the desired Meal details
 * @param itemdata: the items to be displayed
 * @param  navigation: received from parent component
 * @returns JSX.Element
 */
const MealsDisplayer=({displayedmeals}:any):JSX.Element=>{

    const navigation=useNavigation();
    const displayedMeals:Meal[]=displayedmeals;

    const renderMealItem= (itemData:any):JSX.Element=>{
        const item:Meal={...itemData.item};
        //we dont need to create a new instance unless we wanna access methods;
        //pure typechecking vs instantiation
        const onPress=()=>{
            navigation.navigate('MealDetails' as never,{details:item,}as never)
        };

        return <View>
            <MealItem 
            details={item} onPress={onPress}//object deconstruciton; we undo all the key value pairs
            />
        </View>
    };
    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem}/>
            {/**when passewd using flatlist, the data is encapsulated using .item */}
        </View>)
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10
    }})

export default MealsDisplayer