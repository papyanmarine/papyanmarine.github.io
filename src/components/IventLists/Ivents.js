import React, {useState} from "react";

import NewIvent from '../NewIvent/NewIvent';
import IventFrilter from "../IventFrilter/IventFrilter";
import IventList from './IventList'
import IventDiagram from "../IventDiagram/IventDiagram";

import './Ivents.css'

const INITIAL_IVENT =[
    {
      id: 1,
      date: new Date(2023, 3, 6),
      title: 'Go to work',
      description: 'Lorem ispum dolar sit ame'
    },
    {
      id: 2,
      date: new Date(2023, 3, 6),
      title: 'Go to home',
      description: 'Lorem ispum dolar'
    },
    {
      id: 3,
      date: new Date(2023, 3, 6),
      title: 'Go to blabab',
      description: 'Lorem ispum dolar sit'
    },
    {
      id: 4,
      date: new Date(2023, 4, 6),
      title: 'Go to home',
      description: 'Lorem ispum dolar'
    },
    {
      id: 5,
      date: new Date(2023, 4, 6),
      title: 'Go to blabab',
      description: 'Lorem ispum dolar sit'
    },
  ]

const Ivents = (props)=> {
    const[selectedYear, setSelectedYear]=useState('2023');

  const[ivent, setIvent] = useState(INITIAL_IVENT);
  
  const addIventHandler =(ivent)=>{
    setIvent((prevIvent)=>{
      return[ivent, ...prevIvent]
    })
    
  }
  const yearChangeHandler =(year)=>{
    setSelectedYear(year)
  }
  const filteredIvent = ivent.filter(item=>{
    return item.date.getFullYear().toString() === selectedYear;
  })
 
    return(
        <div className="ivents-block bl-pad">
            <NewIvent onAddIvent={addIventHandler}/>
            <IventFrilter onYearChangeHandler={yearChangeHandler} year={selectedYear}/>
            <IventDiagram ivent={filteredIvent}/>
            <IventList ivent={filteredIvent}/>
        </div>
        
    )
}
export default Ivents;