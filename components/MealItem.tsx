import {View, Pressable, Text, Image, StyleSheet,Platform} from 'react-native';
import Meal from '../models/meal';


const MealItem=({details,onPress}:any):JSX.Element=>{//object deconstruction

    const {title,imageUrl,duration,complexity,affordability}=details;

    return <View style={styles.mealItem}>
        <Pressable onPress={onPress}>
            <View  style={styles.externalView}>
                <View>
                    <Image
                    source={{uri:imageUrl}}
                    style={styles.image}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>
                
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration}m</Text>
                    <Text style={styles.detailItem}>{complexity}</Text>
                    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                </View>
            </View>
        </Pressable>
    </View>

};

export default MealItem

const styles=StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        backgroundColor:'white',//needed for IOs
        overflow: Platform.OS==='android' ? 'hidden':'visible'//no need to be tracked dynamically
    },
    externalView:{
        borderRadius:8,
        overflow:'hidden'//so that image border doesnt leak
    },
    image:{
        width:'100%',
        height:200,
        //for images imported; RN doesn't infer size at all
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        padding:8,
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',//actually centers the elements
        //justifies relatively to the main axis (row-left2right)
        padding: 8,
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    }

})