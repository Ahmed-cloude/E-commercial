import React from 'react';
import { useEffect, useState } from 'react';
import './AllItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance'

import { useSelector, useDispatch } from 'react-redux';

const AllItems =()=>{
    const [dataOfAllItems , setDataOfAllItems]= useState({
        data:[]
    })
    useEffect(()=>{
        const fetching = async ()=>{
            const response= await axiosInstance.get('/')
            console.log(response.data)
            setDataOfAllItems({
                ...dataOfAllItems,
                data:response.data
            })
        }
        fetching()
    },[])
    const itemss=useSelector(state=>state)
    const patcher = useDispatch()
    console.log(itemss)
    return(
        <div className='allItems'>
            <button>
                <Link to="/main" >
                    <FontAwesomeIcon icon={faArrowCircleLeft} />
                </Link>
            </button>
            <h1>All Available goods</h1>
            <div className="containerAllItems">
                {
                    dataOfAllItems.data.length !==0 ? dataOfAllItems.data.map((ele,id)=>{
                        return(
                            <div className="item" key={id}>
                                <img src={ele.images[1]} />
                                <p className="discribe">{ele.title}</p>
                                <p className="price">Price: {ele.price}$</p>
                                {
                                    window.localStorage.getItem('loged') === "true" ?
                                        <button onClick={()=>patcher({type:'Add', ele:ele})}>
                                            <FontAwesomeIcon icon={faCartShopping} />
                                        </button>:""
                                }
                            </div>
                        );
                    }): <h1>There is no Items....</h1>
                }
                {
                    itemss.data.length !==0 ? itemss.data.map((ele,id)=>{
                        return(
                            <div className="item" key={id}>
                                <img src={ele.images[1]} />
                                <p className="discribe">{ele.title}</p>
                                <p className="price">Price: {ele.price}$</p>
                                <button onClick={()=>patcher({type:'Add', ele:ele})}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </button>
                            </div>
                        );
                    }): ""
                }

            </div>
        </div>
    );
}

export default AllItems;