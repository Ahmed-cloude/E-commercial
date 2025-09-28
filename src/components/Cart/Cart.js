import React from "react";
import './Cart.css'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const Cart =()=>{

    const itemsss = useSelector(state=>state)
    const patch = useDispatch()
    const [data, setData]= useState({
        data:[],
    });
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data =>{
                setData({
                    ...data,
                    data:data
                });
            })
    },[])
    const ShowElement=()=>{
        return(
            <>
                <div className="order">
                    <div className="containerOfOrder">
                        <img src={data.data[0].images[1]} />
                        <div className="nameOfOrder">{data.data[0].title} <br/> <i>Price :{data.data[0].price}$</i> </div>
                    </div>
                    <button onClick={(e)=>patch({type:'Add'})} className="delete">Delete</button>
                </div>
                <div className="order">
                    <div className="containerOfOrder">
                        <img src={data.data[1].images[1]} />
                        <div className="nameOfOrder"> {data.data[1].title} <br/> <i>Price :{data.data[1].price}$</i> </div>
                    </div>
                    <button  className="delete">Delete</button>
                </div>
                <div className="order">
                    <div className="containerOfOrder">
                        <img src={data.data[2].images[2]} />
                        <div className="nameOfOrder"> {data.data[2].title} <br/> <i>Price :{data.data[2].price}$</i> </div>
                    </div>
                    <button className="delete">Delete</button>
                </div>
                <div className="order">
                    <div className="containerOfOrder">
                        <img src={data.data[3].images[3]} />
                        <div className="nameOfOrder"> {data.data[3].title} <br/> <i>Price :{data.data[3].price}$</i></div>
                    </div>
                    <button className="delete">Delete</button>
                </div>
                
            </>
        );
    }


    return(
        <div className="cart">
            <div className="cortShape">
                <button className="backBtn"> <Link to="/"><FontAwesomeIcon icon={faTimes} /> </Link> </button>
                <div className="allOrderItems">
                    {
                        data.data.length !==0 ?
                        ShowElement():
                        <div className="cartEmpty">Cart is Empty....</div>
                    }
                </div>
                {itemsss.ahmed}
                <div className="footer">
                    <p>Total Price : 700$</p>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    );
}


export default Cart;