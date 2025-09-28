import { createStore } from "@reduxjs/toolkit";



const reducer=(state={cart:[] , ele:{}} , action)=>{
    if(action.type==="Add"){
        console.log(action.ele)
        return {
            ...state,
            cart:[...state.cart , action.ele]
        }
    }
    else if(action.type==="Delete"){
        let newEdite = state.cart.filter((ele2)=>{
            return action.ele.id  !== ele2.id;
        })
        return {...state , cart:[...newEdite]}
    }
    else if(action.type === "Buy"){
        window.alert("Buy successed")
        return {
            ...state,
            cart:[]
        }
    }
    return state
}

export const Store = createStore(reducer)