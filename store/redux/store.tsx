import {configureStore} from '@reduxjs/toolkit';
import favoritesReducer from './favorites'

export const store=configureStore({
    reducer:{
        favoriteMeals:favoritesReducer
    }
})

//we configure the reducer as a store to expose it