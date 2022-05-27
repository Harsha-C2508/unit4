import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = ()=>{
    const [info,setinfo] = useState("");
    return(
        <div>
          parent:
          <Child1 info={info} setinfo={setinfo}/>
          <Child2 info={info}/>
        </div>
    )
}
export default Parent;