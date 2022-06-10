import { Text, View, StyleSheet } from "react-native"
const MealDetails=({navigation,route}:any):JSX.Element=>{

    const {ingredients, steps}=route.params;
    return(

        <View style={styles.overallView}>
            <View style={styles.ingredientZone}>
                <Text>{ingredients} </Text>
            </View>
            <View style={styles.stepsZone}>
                <Text>{steps}</Text>
            </View>
        </View>
        
    
    );}

const styles=StyleSheet.create({
    overallView:{
        flex:1
    },
    ingredientZone:{
        flex:1,
        padding:10
    },
    stepsZone:{
        flex:1,
        padding:10
    }
})

export default MealDetails