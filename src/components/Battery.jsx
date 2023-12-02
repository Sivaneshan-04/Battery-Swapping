

const Battery = (props)=>{
    return <div className="grid grid-cols-5 gap-2">
        <p>{props.id}</p> 
        <p>{props.health}</p> 
        <p>{props.charge}</p> 
        <p>{props.price}</p> 
        <button>Swap</button>
    </div>
};

export default Battery;