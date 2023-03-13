import IventItem from '../IventItem/IventItem';
const IventList = (props)=> {

  if (props.ivent.length === 0) {
    return <p className='ivents-row'> This year no ivent</p>
  }
    return(
        <div className='ivents-row'>
            <IventItem ivent={props.ivent}/>
        </div>
        
    )
}
export default IventList;