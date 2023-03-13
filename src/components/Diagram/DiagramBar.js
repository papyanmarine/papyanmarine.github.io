import './Diagram.css';
const DiagramBar = (props)=>{
    let barHeight = '0%';
    
    if (props.maxValue > 0) {
        barHeight = Math.round(props.value/props.maxValue *100) + '%'
        
    }
    return(
        <div className='diagram-bar'>
            <div className='diagram-bar-inner'>
                <div className='diagram-bar-fill'
                    style={{height: barHeight}}></div>
            </div>
            <div className='diagram-bar-label'>
                {props.label}
            </div>
        </div>
    )
}
export default DiagramBar;