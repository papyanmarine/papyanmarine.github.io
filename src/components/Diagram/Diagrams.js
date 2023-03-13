import DiagramBar from "./DiagramBar.js";
import './Diagram.css';

const Diagrams = (props)=>{
    
    const iventsLenghArray = props.dataSets.map(dataSet=>dataSet.value)
    const maxMonthIvents = Math.max(...iventsLenghArray)
    
    let diagramKey = Math.floor(Math.random()*100);

    return(
        <div className="diagram ivents-row">
            {props.dataSets.map((data)=>(
                <DiagramBar
                    key={diagramKey++}
                    value={data.value}
                    maxValue={maxMonthIvents}
                    label={data.label}
                />
            ))}
        </div>
    )
}
export default Diagrams;