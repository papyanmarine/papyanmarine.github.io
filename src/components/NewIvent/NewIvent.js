import React, {useState} from 'react';
import AddIventForm from "./AddIventForm";
import './NewIvent.css';
 const NewIvent =(props)=>{
    const [isFormVisable, setIsFormVisable]=useState(false)
    const saveIvetDataHandler=(inputIventData)=>{
        const newData ={
            ...inputIventData,
            id: Math.round(Math.random() * 100).toString()
        }
        props.onAddIvent(newData)
        setIsFormVisable(false)
    }
    const formVisableHandler =()=>{
        setIsFormVisable(true)
    }
    const cancelIsFormVisableHandler =()=>{
        setIsFormVisable(false)
    }
    return(
        <div className="new-ivent-form ivents-row">
            {!isFormVisable && <button className="btn btn-primary add-ivent-btn"
                onClick={formVisableHandler}>
                    Add new ivent
            </button>}
            {isFormVisable && <AddIventForm onsaveIvetData={saveIvetDataHandler}
            onCancel = {cancelIsFormVisableHandler}/>}
        </div>
    )
 }
 export default NewIvent;