import * as actionsName from './action';

const initializeState = {
    user: null,
    // recipe: null,
    recipes: [],
    count: 1,
    countR: 1,
    category:null,
    duratoin:null,
    difficulty:null,
    creator:null,
    shoppingList:[],
    c:null


}

const reducer = (state = initializeState, action) => {
    switch (action.type) {
        case actionsName.SET_USER:
            {
                return {
                    ...state,
                    user: action.user

                }
            }
        case actionsName.ADD_RECIPE:
            {
               
               
                return {
                    ...state,
                    recipes :[...state.recipes,action.data],
                

                }
            }
            case actionsName.SET_RECIPES:
                {
                    const recipes = [...action.data]
                    return {
                        ...state,
                        recipes,
        
                    }
                }
                
             
            case actionsName.ADD_CATEGORY:
                {
                    const categories = [...state.categories]
                    categories.push(action.data)
                    return {
                        ...state,
                        categories,
    
                    }
                }
                // case actionsName.SET_DIFFICULTY:
                //     {
                 
                //         return {
                //             ...state,
                //             difficulty:action.data
        
                //         }
                //     }
                //     case actionsName.SET_DURATION:
                //         {
                     
                //             return {
                //                 ...state,
                //                 duratoin:action.data
            
                //             }
                //         }
                //         case actionsName.SET_CREATOR:
                //             {
                         
                //                 return {
                //                     ...state,
                //                     creator:action.data
                
                //                 }
                //             }
                            case actionsName.SET_CATEGORY:
                                {
                             
                                    return {
                                        ...state,
                                        category:action.data
                    
                                    }
                                }
                                case actionsName.SET_SHOPPING:
                                    {
                                        const shoppingList = [...action.data]
                                        return {
                                            ...state,
                                            shoppingList,
                            
                                        }
                                    }
                                    case actionsName.SET_SHOPPINGRECIPE:
                                        {
                                           
                                        //     const arr=[...shoppingList]
                                        //  x= arr.findIndex(x=>x.Name===action.data.Name)
                                        //     arr[x].Count+=action.data.Count;
                                        //     shoppingList=arr
                                        //     return {
                                        //         ...state,
                                        //         shoppingList
                            
                                        //     }
                                        }
                                    case actionsName.DELETE_RECIPE:
                                    {
                                        console.log("DELETE_RECIPE")
                                        const recipes2 = state.recipes?.filter(x => x.id != action.Recipe)
                                        return {
                                                                                    
                                         ...state, recipes2 
                        
                                        }
                                    }

        default:
            return { ...state }
    }
}
export default reducer;

