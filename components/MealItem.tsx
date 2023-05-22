import {View, Pressable, Text, Image, StyleSheet,Platform} from 'react-native';
import Meal from '../models/meal';
import * as encoding from 'text-encoding';


const MealItem=({details,onPress}:any):JSX.Element=>{//object deconstruction

    const {title,imageUrl,duration,complexity,affordability}=details;

    const triggerClick=async()=>{
        onPress()
        console.log('triggereddddd')
        const Token='i85e13cphn904n6l0lum791j1iim27swqh7wvugy'
        const resp=await fetch('https://api.json-generator.com/templates/uy3kXNhwdzNX/data',{
            headers:{
            'Authorization':`Bearer ${Token}`
            }
        })
        if (resp.ok){
            const reader=resp.body?.getReader()
            const decoder=new TextDecoder('utf-8');
            let body=""
            while(true){
            const {done,value}:any=await reader?.read()
            if(value){
                //let processed=processChunk(value)
                console.log(decoder.decode(value,{stream:true}))
            }
            if(done){
                break
            }
            }
  }     
    }

    return <View style={styles.mealItem}>
        <Pressable onPress={triggerClick}>
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