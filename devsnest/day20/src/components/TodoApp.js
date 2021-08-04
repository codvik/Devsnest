import React,{useState} from 'react'

function TodoApp(){



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
        <>
        <div>
            <input type="text" placeholder="Add Task" onChange={takeinputValue} value={inputValue}></input>
            <button onClick={addToList}>+</button>
        </div>
       
            {
                arr.map(
                    (data,id) => {
                        return(
                            <div>
                                 <br></br><br></br>
                                 <button onClick={()=>deLet(id)}>dlt</button>
                                  <i>{data}</i>
                            </div>
                        )
                        
                    }
                )
            }
               
        </>
        
    );
}

export default TodoApp;