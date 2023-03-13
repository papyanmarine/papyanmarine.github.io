import React, {useState} from "react"

const AddIventForm =(props)=>{
    // const[userInput, setUserInput] = useState({
    //     title: '',
    //     description: '',
    //     date: ''
    // })

    // const titleChangeHandler =(event)=>{
    //     setUserInput(()=>{
    //         return{
    //             ...userInput,
    //             title: event.target.value,
    //         }
    //     });
    // }

    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[date, setDate] = useState('')
    
    const titleChangeHandler =(event)=>{
        setTitle(event.target.value);
    }
    const DescriptionChangeHandler =(event)=>{
        setDescription(event.target.value);
    }
    const dateChangeHandler =(event)=>{
        setDate(event.target.value);
    }
    const onSubmitHandler =(e)=>{
        e.preventDefault();
        const newData = {
            title: title,
            description: description,
            date: new Date(date) 
        }
        props.onsaveIvetData(newData)
        setTitle('');
        setDescription('');
        setDate('')
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div className="row form-wrap cl-gap">
                <div className="input-group flex-nowrap mb-3 col">
                    <input type="text" className="form-control form-title inp"
                     placeholder="Ivent title" value={title}
                     onChange={titleChangeHandler}/>
                </div>
                <div className="input-group flex-nowrap mb-3 col">
                    <input type="text" className="form-control form-dscp inp"
                     placeholder="Ivent description" value={description}
                     onChange={DescriptionChangeHandler}/>
                </div>
            </div>
            <div className="input-group flex-nowrap mb-3">
                <input type="date" className="form-control form-date inp"
                 placeholder="Ivent Date" value={date}
                 onChange={dateChangeHandler}/>
            </div>
            <div className="row cl-gap">
                <button className="btn btn-primary submit col" type="submit">Submit</button>
                <button className="btn btn-outline-secondary cancel col" type="button"
                onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    )
}
export default AddIventForm;