import React from "react";
import './Cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const Cart =()=>{

    const itemsss = useSelector(state=>state)
    const patcher = useDispatch()
    
    const ShowElement=()=>{
        return(
            <>
                {
                    itemsss.cart.map((ele)=>{
                        return (
                            <div key={ele.id} className="order">
                                <div className="containerOfOrder">
                                    <img src={ele.images[1]} />
                                    <div className="nameOfOrder">{ele.title} <br/> <i>Price :{ele.price}$</i> </div>
                                </div>
                                <button onClick={()=> patcher({type:'Delete' , ele:ele})} className="delete">Delete</button>
                            </div>
                        )
                    })
                }
                
            </>
        );
    }

    const getTotalPrice=()=>{
        let total=0;
        itemsss.cart.map((ele)=>total= total+ele.price)
        return total;
    }

    return(
        <div className="cart">
            <div className="cortShape">
                <button className="backBtn"> <Link to="/"><FontAwesomeIcon icon={faTimes} /> </Link> </button>
                <div className="allOrderItems" >
                    {
                        itemsss.cart.length !==0 ?
                        ShowElement():
                        <div className="cartEmpty">Cart is Empty....</div>
                    }
                </div>

                <div className="footer">
                    <p>Total Price : {getTotalPrice()}$</p>
                    <button onClick={()=> patcher({type:'Buy'})}>Buy</button>
                </div>
            </div>
        </div>
    );
}


export default Cart;