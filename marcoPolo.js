import React, {useState} from "react";

function MarcoPolo(){

  const [name, changeName] = useState("Marco")
  const [bname, changeBname] = useState("Polo")
   

  function eventHandler(event){
    if(bname=="Polo"){
      changeName("Polo")
      changeBname("Marco")
    }
    else{
      changeBname("Polo");
      changeName("Marco");
    }

  }

  return <div>
    <h1 id="marco- polo" name="head" value={name.head}>{name}</h1>
    <button value={name.btn} name="btn" id="marco- polo- toggler" onClick={eventHandler}>{bname}</button>
  </div>
}

export default MarcoPolo;