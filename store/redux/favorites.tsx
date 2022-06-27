import {createSlice} from '@reduxjs/toolkit';
import Meal from '../../models/meal';

//we create a single slice for every state we desire to manage
// we then expose them to components through the store as reducers
const favoritesSlice=createSlice({
    //the slice is made out of the state name, an initial value for it and some reducers
    //reducers are methods

    name:'favorites',

    initialState:{
        ids:[] as any
    },
    reducers:{
        addFavorite:(state,action)=>{//fetches the latest state
            state.ids.push(action.payload.id);
        },
        removeFavorite:(state,action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        },
    }//payload is the data we wish to push to the state through action
});

export default favoritesSlice.reducer;
export const addFavorites=favoritesSlice.actions.addFavorite;
export const removeFavorites=favoritesSlice.actions.removeFavorite;

//exposing desired methods