function Block(props){
    return (
        <>
             <h1>props.name</h1>
             <p>props.calo</p>
         </>
        
    );
}

function Cal(){
    return(
         <div className="calories">
             <Block name="Piza" calo="56"/>
         </div>
    )
}

export default Cal;