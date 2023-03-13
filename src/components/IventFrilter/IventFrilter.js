import React from "react"


const IventFrilter = (props)=>{
    const yearChangeHandler =(event)=>{
        props.onYearChangeHandler(event.target.value)
    }
    return(
        <div className="ivents-row">
            <select onChange={yearChangeHandler} className="form-select" aria-label="Default select example">
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
        </div>
    )
}
export default IventFrilter