import React, {useEffect, useState} from "react";
import "./Content.css";
import Items1 from "./Items1/Item1";
import Spiner from "../Spiner/Spiner";
const Contant =(props)=>{

    const [data,setData] =useState({
        data:[],
    })

    useEffect(()=>{
        window.localStorage.removeItem("clothes")
        window.localStorage.removeItem("shoes")
        window.localStorage.removeItem("miscellaneous")
        window.localStorage.removeItem("furniture")
        window.localStorage.removeItem("electronics")

        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)

                setData({...data,  data:json})
                
                json.map((ele)=>{
                    if( (ele.category.name).toLowerCase() === 'clothes' ){
                        window.localStorage.setItem("clothes","clothes")
                    }
                    
                    if( (ele.category.name).toLowerCase() === 'shoes' ){
                        window.localStorage.setItem("shoes","shoes")
                    }
                    
                    if( (ele.category.name).toLowerCase() === 'miscellaneous' ){
                            window.localStorage.setItem("miscellaneous","miscellaneous")
                        }
                    
                    if( (ele.category.name).toLowerCase() === 'furniture' ){
                        window.localStorage.setItem("furniture","furniture")
                    }
                    
                    if( (ele.category.name).toLowerCase() === 'electronics' ){
                        window.localStorage.setItem("electronics","electronics")
                    }
                })
            })
            
    },[])

    return(
        <div className="conatnt" style={{width:`${props.widthOffApp}px`}}>
            <div className="">
                <p className="clothes">Items</p>
                
                {data.data.length===0 ? <Spiner />:" "}
                {window.localStorage.getItem("clothes")? <Items1 name="Clothes" data={data} />:" "}
                {window.localStorage.getItem("shoes")?<Items1 name="Shoes" data={data} />:" "}
                {/* {window.localStorage.getItem("Miscellaneous")!== " " ? <Items1 name="Miscellaneous" data={data} />:" "} */}
                {window.localStorage.getItem("miscellaneous")? <Items1 name="Miscellaneous" data={data} />:console.log("not found")}
                {window.localStorage.getItem("furniture")? <Items1 name="Furniture" data={data} />:" "}
                {window.localStorage.getItem("electronics")?<Items1 name="Electronics" data={data} />:" "}
            </div>
        </div>
    );
}



export default Contant;