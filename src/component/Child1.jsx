import React, { useState } from "react";

const Child1=()=>{
    const [value,setValue] = useState("");

    const onHandleChange = (e) =>{
        let newValue = e.target.value
          props.setinfo(newValue)  
    }
    return(
     <div>
         <input onChange={onHandleChange}/>
         Child1:{props.info}
     </div>
    )
}
export default Child1;