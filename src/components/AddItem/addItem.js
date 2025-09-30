import React from 'react'
import './addItem.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const AddItem = () => {
    const [url,setUrl]=useState('')
    const items = useSelector(state=>state)
    const patcher = useDispatch()

    const onchange1 = (e) => {
      console.log(e)
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (ev) => {
          // ev.target.result = DataURL صالح لعرض الصورة
          // patcher({ type: 'AddItem', payload: ev.target.result })
          setUrl(ev.target.result )
          console.log(ev.target.result)
        }
        reader.readAsDataURL(file)
      }
    }

    const addHandler =()=>{
      const inputs = document.querySelectorAll('form input');
      const name = document.querySelector('select')
      patcher({
          type: 'AddItem',
          payload:{
          category:{
            name:name.value
          },
          price:inputs[1].value,
          title:parseInt(inputs[0].value),
          images:[url,url]
        }
      })
      
    }
    return (
        <div className='addItem'>
            <div className='addItemShap'>
                <div  className='firstSection'>
                    
                    <div className='imagePlace'>
                      <img src={url} alt='img'  />
                    </div>

                    <button className='addPhoto'>
                      <label htmlFor='fileInput'>Add Photo</label>
                      <input
                        accept='image/*'
                        id="fileInput"
                        style={{ display: 'none' }}
                        type="file"
                        onChange={onchange1}
                      />
                    </button>
                </div>
                <div className='secondSection'>
                    <form >
                        <select>
                            <option>clothes</option>
                            <option>shoes</option>
                            <option>miscellaneous</option>
                            <option>furniture</option>
                            <option>electronics</option>
                            <option>others</option>
                        </select> <br/>

                        <label>Describtion</label> <br/>
                        <input type='text'/><br/>

                        <label>Price</label> <br/>
                        <input type='text'/><br/>
                        
                    </form>
                    <section>
                        <button className='cancelBtn' >Cancel</button>
                        <button className='addbtn' onClick={addHandler} >ADD</button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default AddItem
