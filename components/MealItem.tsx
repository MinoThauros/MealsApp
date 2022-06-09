import {View, Pressable, Text, Image, StyleSheet} from 'react-native';
import Meal from '../models/meal';


const MealItem=({
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    steps

}:any):JSX.Element=>{//object deconstruction
    return <View>
        <Pressable>
            <View>
                <Image
                 source={{uri:imageUrl}}
                 style={styles.image}
                 />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                <Text>{duration}m</Text>
                <Text>{complexity}</Text>
                <Text>{affordability.toUpperCase()}</Text>
               
            </View>
            
        </Pressable>
    </View>

};

export default MealItem

const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:200,
        //for images imported; RN doesn't infer size at all
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18
    }
})