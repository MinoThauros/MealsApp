import { Text, View, StyleSheet,Image, Platform, ScrollView } from "react-native"
const MealDetails=({navigation,route}:any):JSX.Element=>{

    const {ingredients,steps,imageUrl}=route.params;//fetching navigation params routine
    return(
        
        <View style={styles.overallView}>
            <ScrollView>
                <View style={styles.imageContainer}>
                <Image source={{uri:imageUrl}} style={styles.image}/>
            </View>
            
            <View style={styles.textZone}>
                <Text style={styles.detailsTitle}>Ingredients: </Text>
                <View style={styles.ingredientZone}>
                    {ingredients.map((ingredient:string)=><Text key={ingredient} style={{ fontSize: 15 }}>{`\u2022 ${ingredient}`}</Text>)}
                </View>
                <Text style={styles.detailsTitle}>Steps: </Text>
                <View style={styles.stepsZone}>
                    {steps.map((step:string)=><Text key={step} style={{ fontSize: 15 }}>{`\u2022 ${step}`}</Text>)}
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
        backgroundColor:'white',//needed for IOs
        overflow: Platform.OS==='android' ? 'hidden':'visible'//no need to be tracked dynamically
        //alignItems:'center'
    },
    textZone:{
        backgroundColor:'white',
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
    }
})

export default MealDetails