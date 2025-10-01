import { createStore } from "@reduxjs/toolkit";

const Admin = {
    email:"admin1@gmail.com",
    password:"123123123"
}

const Reducer=  (state={cart:[],data:[],ele:{}, admin:false, Admin } , action)=>{
    if(action.type==="Add"){
        return {
            ...state,
            cart:[...state.cart , action.ele]
        }
    }
    else if(action.type==="Delete"){
        let newEdite = state.cart.filter((ele2)=>{
            return action.ele.id  !== ele2.id;
        })
        return {
            ...state ,
            cart:[...newEdite]
        }
    }
    else if(action.type === "Buy"){
        window.alert("Buy successed")
        return {
            ...state,
            cart:[]
        }
    }
    else if(action.type === "Admin"){
        console.log("Admin mood");
        return {
            ...state,
            admin:true,
        }
    }
    else if(action.type === "AddItem"){
        console.log(state.data)
        return {
            ...state,
            data:[...state.data, action.payload],
        }
    }
    return state
}

export const Store = createStore(Reducer)