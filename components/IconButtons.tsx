import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons';

export const Icon=({icon,color,onPress}:any)=>{

    return (
        <Pressable onPress={onPress} style={
            ({pressed})=>pressed && styles.clicked //
        }>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
        )
    };

const styles=StyleSheet.create({
    clicked:{
        opacity:0.7
    }
})