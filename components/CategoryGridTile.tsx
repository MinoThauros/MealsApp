import { Pressable, View,Text,StyleSheet, Platform } from "react-native"
import GridInput from '../models/basicStruct';
import {useNavigation } from "@react-navigation/native";


const CategoryGridTile=(element:GridInput)=>{
    //const navigation:any=useNavigation(); a way to add the {navigation} without the stack
    //listens to every instance of {navigation} being sent to the component
    const {title,color,onPress}:GridInput=element;//declare object type instead of it being assumed fo deconstruction
    return <View style={styles.gridItem}>
        <Pressable 
            android_ripple={{color:'#ccc'}} 
            style={({pressed})=>[styles.button,(pressed ? styles.buttonPressed:null)]}
            onPress={onPress} //simply executes the passed prop which is a function here
            >
            <View style={[styles.innerContainer,{backgroundColor:color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
};//android_ripple would leak way too far off component so we hide the overflow; this however disables
//the pressed prop is sent as a feedback to the styles prop

export default CategoryGridTile;

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        //backgroundColor:'white',needed for IOs
        overflow: Platform.OS==='android' ? 'hidden':'visible',//no need to be tracked dynamically
        borderTopColor:'#351401',
        
    },

    button:{
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    },

    buttonPressed:{
        opacity:0.5
    }
})