import {CATEGORIES} from '../data/dummy-data';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import Category from '../models/category';


const renderCategoryItem=(itemData:any)=>{
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>;
    //the item needs to be accessed using the .item method
    //we dont give the id propriety to the element as its already given to the FlatList
}
const CategoriesScreen=()=>{
    return <FlatList data={CATEGORIES}  keyExtractor={(item=>item.id)} renderItem={renderCategoryItem} numColumns={2}/>
    //renderItem receives a callback function on how to display element
};

export default CategoriesScreen