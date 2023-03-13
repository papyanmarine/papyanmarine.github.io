import React, {useState} from "react";
import './IventItem.css'
import IventDate from "../IventDate/IventDate.js";

const IventItem  = (props) => {
/*
   const [descrption, setDescrption] = useState(props.ivent);
   const changeDescriptionHandler =(id)=>{
    setDescrptions(
        descrptions.map((item)=>{
            if (item.id === id) {
                item.descrption = 'new text'
            }else{
                console.log(item, item.id)
            }
            
        })
    )
   }*/
  
    return(
        <div>
           { props.ivent.map((el)=> {
                return(
                    <div className="row ivent-item" key={el.id}>
                        <div className="date col-md-8 b-col-1">
                            <IventDate date={el.date}/>
                        </div>
                        <div className="col-md-4 b-col-2 ivent-content">
                            <h2 className="ivent-title">{el.title}</h2>
                            <p className="ivent-txt">{el.description}</p>
                            {/* <button onClick={()=>changeDescriptionHandler(el.id)}>Edit</button> */}
                        </div>
                    </div>
                )
            })}
            
        </div>
        
    )
}
export default IventItem