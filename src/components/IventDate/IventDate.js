import './IventDate.css'
const IventDate = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString("ru-Ru", {month: "long"});
    const day = props.date.toLocaleString("ru-Ru", {day: "2-digit"});

    return(
        <div className="ivent-date-wrap">
            <p className="date-txt">{month}</p>      
            <p className="date-txt">{day}, {year}</p>   
        </div>
    )
}
export default IventDate;