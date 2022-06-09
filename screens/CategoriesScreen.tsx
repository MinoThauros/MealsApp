import {CATEGORIES} from '../data/dummy-data';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';




const CategoriesScreen=({navigation}:any):JSX.Element=>{
    //need to use brackets to show that navigation is an object of type any
    //without brackets, navigation will be assumed to be a function of return type any
    //navigation is passed as a prop from project root

    const renderCategoryItem=function (itemData:any):JSX.Element {

        const pressHandler=()=>{
            navigation.navigate('MealsOverview',{
                //we render based on a reference passed by itemData
                //we pass to the called opponent an object which will be taken as a route
                categoryId:itemData.item.id,//the second element passed in a object
                //sent as the route params to child
            })
        };
        //this is where we pass the details to the component
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>;
        //the item needs to be accessed using the .item method
        //we dont give the id propriety to the element as its already given to the FlatList
    };

    return <FlatList data={CATEGORIES}  keyExtractor={(item=>item.id)} renderItem={renderCategoryItem} numColumns={2}/>
    //renderItem receives a callback function on how to display element
};
/**design pattern: lower complexity of return portion by fragmenting the flatlist's
 *structure:
    => pass rendering to a local variable
    => local variable fetchees a component which accesses element as element.item
    => function to be triggered on vent is simply referenced

*/
export default CategoriesScreen