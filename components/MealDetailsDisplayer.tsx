import { Text, View, StyleSheet} from "react-native"

const ElementHandler=({element}:any)=>{
    return (
    <View style={styles.individualBox}>
        <Text style={styles.textStyle}>{`\u2022 ${element}`}</Text>
    </View>
    )
};

const styles=StyleSheet.create({
    individualBox:{
        backgroundColor:'#d6971a',
        flex:1,
        padding:2,
        borderRadius:8,
        margin:2,
        
    },
    textStyle:{
        fontSize: 15,
        //textAlign:'center'
    }
})

//would be lovely with a class template
export default ElementHandler