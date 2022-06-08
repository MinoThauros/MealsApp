import {View, Text} from 'react-native';


const MealItem=({title}:any):JSX.Element=>{//object deconstruction
    return <View>
        <Text>{title}</Text>
    </View>

};

export default MealItem