import React from "react";
import "./Item1.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Spiner from "../../Spiner/Spiner";

import { useDispatch, useSelector } from "react-redux";

const Items1 =(props)=>{

    const itemss = useSelector(state => state)
    const patcher = useDispatch()
    
    const clickHandler = (e)=>{
        // console.log(e)
        let x=window.localStorage.getItem("items");
        x=x+" "+e.id;
        window.localStorage.setItem("items",x);

    }
    return (
        <div className="">
            <div className="bar">{props.name}</div>
            <div className="slider">
                {props.data.data.length !==0 ? props.data.data.map((ele,id)=>{
                    
                        if((ele.category.name).toLowerCase() ===(props.name).toLowerCase() ){
                            return(
                                <div className="item" key={id}>
                                    <img src={ele.images[1]} />
                                    <p className="discribe">{ele.title}</p>
                                    <p className="price">Price: {ele.price}$ </p>
                                    <button onClick={()=> {clickHandler(ele); patcher({type:"Add", ele:ele})} }>
                                            <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>
                            );
                        }
                    }) : <Spiner />
                }
                {props.data.data.length !==0 ? itemss.data.map((ele,id)=>{
                    
                        if((ele.category.name).toLowerCase() ===(props.name).toLowerCase() ){
                            return(
                                <div className="item" key={id}>
                                    <img src={ele.images[1]} />
                                    <p className="discribe">{ele.title}</p>
                                    <p className="price">Price: {ele.price}$ </p>
                                    <button onClick={()=> {clickHandler(ele); patcher({type:"Add", ele:ele})} }>
                                            <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>
                            );
                        }
                    }) :''
                }
                
            </div>
        </div>
    );
}

export default Items1;