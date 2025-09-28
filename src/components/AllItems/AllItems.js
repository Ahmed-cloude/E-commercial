import React from 'react';
import { useEffect, useState } from 'react';
import './AllItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const AllItems =()=>{
    const [dataOfAllItems , setDataOfAllItems]= useState({
        data:[]
    })
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data =>{
                setDataOfAllItems({
                    ...dataOfAllItems,
                    data:data
                });
            })
    },[])
    return(
        <div className='allItems'>
            <button>
                <Link to="/" >
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
                                <button>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </button>
                            </div>
                        );
                    }): <h1>There is no Items....</h1>
                }
            </div>
        </div>
    );
}

export default AllItems;