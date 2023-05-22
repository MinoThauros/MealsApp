import { createContext, useState } from "react";

export const FavoritesContext=createContext({//needs to be exported as a context
    ids:[] as string[],//state
    addFavorite:(id:string):void=>{},//methods
    removeFavorite:(id:string):void=>{}

});//similar to an object; me see methods and proprieties


const FavoriteContextProvider=({children}:any):JSX.Element=>{//wraper to expose context methods
    //we define the methods here
    
    const [favoriteMealsIds,setfavoriteMealsIds]=useState([] as string[]);

    const  addFavorite=(id:string)=>{
        setfavoriteMealsIds((currentFavIds:string[])=>[...currentFavIds, id]);
    };

    const  removeFavorite=(id:string)=>{
        setfavoriteMealsIds((currentFavIds:string[])=>currentFavIds.filter(mealId=>mealId !==id));
    };

    const value={
        ids:favoriteMealsIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    };

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
};

export default FavoriteContextProvider