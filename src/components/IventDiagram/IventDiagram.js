import Diagrams from "../Diagram/Diagrams"

const IventDiagram =(props)=>{
    const filteredIventMonth = props.ivent.filter(item=>{
        //return item.date.getMonth().toString();
        let mountCount = item.date.getMonth().toString()
        return mountCount
      })
      
      const mountCount = filteredIventMonth.length;

    const diagramDataSets =[
        {label: 'Jan', value:0},
        {label: 'Feb', value:0},
        {label: 'March', value:0},
        {label: 'April', value:0},
        {label: 'May', value:0},
        {label: 'June', value:0},
        {label: 'Jule', value:0},
        {label: 'Aug', value:0},
        {label: 'Sep', value:0},
        {label: 'Oct', value:0},
        {label: 'Nov', value:0},
        {label: 'Dec', value:0}
    ]
    for (const ivent of props.ivent) {
        const iventMonth = ivent.date.getMonth();
        diagramDataSets[iventMonth].value += mountCount
    }
    return <Diagrams dataSets={diagramDataSets}/>
}
export default IventDiagram