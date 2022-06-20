import { Text, View, StyleSheet,Image, Platform, ScrollView } from "react-native";
import ElementHandler from "../components/MealDetailsDisplayer";
import Meal from "../models/meal";
const MealDetails=({navigation,route}:any):JSX.Element=>{

    const details:Meal=route.params.details;//fetching navigation params routine
    return(
        
        <View style={styles.overallView}>
            
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image source={{uri:details.imageUrl}} style={styles.image}/>
                    <View style={styles.detailsBox}>
                        <View>
                            <Text style={styles.title}>{details.title}</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.detailItem}>{details.duration}m |</Text>
                            <Text style={styles.detailItem}>{details.complexity} |</Text>
                            <Text style={styles.detailItem}>{details.affordability.toUpperCase()}</Text>
                        </View>
                    </View>
                </View>
            
            <View style={styles.textZone}>
                <Text style={styles.detailsTitle}>Ingredients: </Text>
                <View style={styles.ingredientZone}>
                {details.ingredients.map((ingredient:string)=><ElementHandler key={ingredient} element={ingredient}/>)}
                </View>
                <Text style={styles.detailsTitle}>Steps: </Text>
                <View style={styles.stepsZone}>
                    {details.steps.map((step:string)=><ElementHandler key={step} element={step}/>)}
                </View>
            </View>  
            </ScrollView>
            
        </View>
        
    
    );}

const styles=StyleSheet.create({
    overallView:{
        flex:1,
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        //backgroundColor:'white',needed for IOs
        overflow: Platform.OS==='android' ? 'hidden':'visible'//no need to be tracked dynamically
        //alignItems:'center'
    },
    textZone:{
        //backgroundColor:'white',
        flex:1,
        padding:15
    },
    ingredientZone:{
        flex:1,
        padding:10
    },
    stepsZone:{
        flex:1,
        padding:10
    },
    image:{
        width:'100%',
        height:400,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white',
        marginHorizontal:16,
        
        //for images imported; RN doesn't infer size at all
    },
    imageContainer:{
        borderRadius:8,
        overflow:'hidden',
        alignItems:'center',
        padding:12
    },
    detailsTitle:{
        fontSize:18,
        fontStyle:'italic',
        fontWeight:'bold'
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',//actually centers the elements
        //justifies relatively to the main axis (row-left2right)
        //padding: 8,
        
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12,
        color:'white'
    },
    detailsBox:{
        flex:1,
        width:'100%',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        padding:8,
        color:'white'
    }
})

export default MealDetails

/**
 To-do:
    * replicate prof's design: create a display handler for ingredients and steps
    * within view handler, map array of strings to cool lil containers
 */