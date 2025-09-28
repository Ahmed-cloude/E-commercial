import { createStore } from "@reduxjs/toolkit";



const reducer=(state={cart:[] , ele:{}} , action)=>{
    if(action.type==="Add"){
        console.log(action.ele)
        return {
            ...state,
            cart:[...state.cart , action.ele]
        }
    }
    return state
}

export const Store = createStore(reducer)