import React, {useState} from 'react';

function Navbar(){
    const [value, fun] = useState(0);
    const[myValue, fun1] = useState("");
    const[arr, fun2] = useState([]);
    
    function increase(){
        fun((prev)=>prev+1);
    }
    function takeValue(event){
        fun1(event.target.value);
    }
    function printValue(){
          fun2((data)=>{return [...data, myValue]});
    }
    function delet(id){
        fun2((vlue)=> {

                return vlue.filter((arrEl,index)=>{return index!==id});
        }
        )}
   
    
    return ( 
            <nav>
                <input  onChange ={takeValue} ></input>
                <button onClick={printValue}>+</button>
                <button onClick={()=>{fun((prev)=>prev+1)}}>Increase</button>
                <button onClick={()=>{fun((prev)=>prev-1)}}>Dicrease</button>
                <button onClick={()=>{fun(0)}}>reset</button>
                <h1>Value:{value}</h1>
                <h1>Input:{myValue}</h1>
                <ol>
                    {arr.map((data,index)=>{return (
                        <div>
                        <button onClick={()=>delet(index)}>X</button>,
                        <li>{data}</li>
                        </div>
                        
                    )

                    })}

                </ol>
                
            </nav>
            
          
         );
}
export default Navbar;