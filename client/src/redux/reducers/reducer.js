
import {FETCH_ALL,SEARCH_POST,CREATE,UPDATE,DELETE,LIKE,START_LOADING,END_LOADING,FETCH_Selected_file} from './ReducerCaseTypes'

//STEP 3 AFTER ADDING PAGINATION AND THEN ADDING MAINLY LOADING

export const reducer = (state= {isLoading:true, posts:[] } ,action)=>{
    switch (action.type) {
    
        case START_LOADING:{
           return {...state,isLoading:true}
        }
        case END_LOADING:{
           return {...state,isLoading:false}
        }
        case FETCH_ALL:
            return {
                ...state,
                posts:action.payload.data,
                currentPage: action.payload.currentPage,
                NumberOfPages:action.payload.NumberOfPages
            };
    
            case SEARCH_POST:
                return  {...state,posts :action.payload};
            case FETCH_Selected_file:
                return  {...state,post :action.payload}; 
            case CREATE:
                return {...state,posts:[...state,action.payload]};
        
            case UPDATE:
                return {...state,posts:state.posts.map((post)=>post._id==action.payload._id ? action.payload : post) }  
            
            case DELETE:
                return {...state,posts:state.posts.filter((post)=>post._id!==action.payload)};
            
            case LIKE:
                return {...state,posts:state.posts.map((post)=>post._id==action.payload._id ? action.payload : post)}
        
            default:
                return state;
            }
    
        }







// STEP 2 AFFTER ADDING PAGINATION 
// export const reducer = (state=[],action)=>{
// switch (action.type) {
//     case FETCH_ALL:
//         return {
//             ...state,
//             posts:action.payload.data,
//             currentPage: action.payload.currentPage,
//             NumberOfPages:action.payload.NumberOfPages
//         };
//         case SEARCH_POST:
//             return  {...state,posts :action.payload}; 
//         case CREATE:
//             return [...state,action.payload];
//         case UPDATE:
//             return state.map((post)=>post._id==action.payload._id ? action.payload : post)   
//         case DELETE:
//             return state.filter((post)=>post._id!==action.payload);
//         case LIKE:
//             return state.map((post)=>post._id==action.payload._id ? action.payload : post)
//         default:
//             return state;
//         }
//     }




    // STEP 1  before ADDING PAGINATION
            // export const reducer = (state=[],action)=>{
                //   if (action.type === 'creat'){
                
                //   }
                /////////////    or use switch statement
    // case FETCH_ALL:
    //     return action.payload;
    // case SEARCH_POST:
    //     return  action.payload; 
    // case CREATE:
    //     return [...state,action.payload];

    // case UPDATE:
    //     return state.map((post)=>post._id==action.payload._id ? action.payload : post)   
    
    // case DELETE:
    //     return state.filter((post)=>post._id!==action.payload);
    
    // case LIKE:
    //     return state.map((post)=>post._id==action.payload._id ? action.payload : post)

    // default:
    //     return state;
    
// }

// }