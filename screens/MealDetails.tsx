import { Text, View, StyleSheet,Image, Platform, ScrollView, Button } from "react-native";
import ElementHandler from "../components/MealDetailsDisplayer";
import Meal from "../models/meal";
import { useLayoutEffect,useContext } from "react";
import { Icon } from "../components/IconButtons";
import { addFavorites,removeFavorites } from "../store/redux/favorites";
import { useSelector,useDispatch } from "react-redux";


const MealDetails=({navigation,route}:any):JSX.Element=>{
    const details:Meal=route.params.details;//fetching navigation params routine
    //const favoriteMealCtx=useContext(FavoritesContext);
    //needs to be exported as a context; we hook to it
    //essentially gives us access to the context of that component at a global level
    //const mealIsFavorite:boolean=favoriteMealCtx.ids.includes(details.id);

    const favoriteMealIds=useSelector((state:any)=>state.favoriteMeals.ids);
    const dispatch=useDispatch();
    const mealIsFavorite:boolean=favoriteMealIds.includes(details.id);

    const headerButtonAction=()=>{
        //navigation.navigate('Drawer')
        if (mealIsFavorite){
            //favoriteMealCtx.removeFavorite(details.id)
            dispatch(removeFavorites({id:details.id}));
        }
        else{
            //favoriteMealCtx.addFavorite(details.id)
            dispatch(addFavorites({id:details.id}));
        }//payload is passed to the method
    };

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:details.title,
            headerRight:()=>{
                return <Icon icon={mealIsFavorite ? 'star': 'star-outline'} color="white" onPress={headerButtonAction} />
            }
        })},[
            details.title, 
            details.id, 
            navigation, headerButtonAction] );
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
        fontWeight:'bold',
        color:'white'
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
   
        //width:'100%',
        alignItems:'center',
        borderBottomColor:'#d6971a',
        borderBottomWidth: 4,
        paddingBottom:15
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