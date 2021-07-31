function Block(props){
    return (
        <>
             <h1>{props.name}</h1>
             <p>{props.calo}</p>
         </>
        
    );
}

function Cal(props){
    return(
         <div className="calories">
             <Block name={props.name} calo={props.calo}/>
         </div>
    )
}

export default Cal;