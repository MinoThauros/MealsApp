import {configureStore} from '@reduxjs/toolkit';
import favoritesReducer from './favorites'

export const store=configureStore({
    reducer:{
        favoriteMeals:favoritesReducer //binding the reducer as a store
    }
})

//we configure the reducer as a store to expose it