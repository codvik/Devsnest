import React,{useState} from 'react'
import Pract1Addlist from './Pract1Addlist';


function Pract1TodoApp(){



     const [inputValue, inputFun] = useState("");
     const [arr, arrFun] = useState([]);

     function takeinputValue(event) {
         inputFun(
             ()=>{
                 return event.target.value;
             }
         );
     }

     function addToList(){
         arrFun(
            (Prev) => {
                return [...Prev,inputValue]
            }
         );
         inputFun("");
     }

     function deLet(id){
         arrFun(
             (prev) => {
                 return (
                     prev.filter(
                         (myValue,Index) => {
                             return id!==Index;
                         }
                     )
                 )
             }
         )
     }
 
    
    return(
        <div className="icon">
        <div className="heading">
            <h1 >My to Do lIst</h1>
            <input type="text" placeholder="Add Task" onChange={takeinputValue} value={inputValue} className="inpt"></input>
            <button onClick={addToList} className="bttn">+</button>
        </div>
        
            {
                arr.map(
                    (data,id) => {
                        return(
                            <Pract1Addlist data={data} id={id} deLet={deLet}/>
                        )
                        
                    }
                )
            }
        
               
        </div>
        
    );
}

export default Pract1TodoApp;