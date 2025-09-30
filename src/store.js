import { createStore } from "@reduxjs/toolkit";

const Admin = {
    email:"admin1@gmail.com",
    password:"123123123"
}
const AddItem ={
    image:''
}


const reducer=(state={cart:[] , ele:{}, admin:false, Admin ,AddItem} , action)=>{
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
    else if(action.type === "Admin"){
        console.log("Admin mood");
        return {
            ...state,
            admin:true,
        }
    }
    else if(action.type === "AddItem"){
        // console.log("Admin mood");
        return {
            ...state,
            cart:[...state.cart , action.payload]
        }
    }
    return state
}

export const Store = createStore(reducer)