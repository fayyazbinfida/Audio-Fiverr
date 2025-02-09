import React, { useState } from 'react'

function Mycom() {
    const [txtname, setTxtname] = useState();

    function handlechange(event){
        setTxtname(event.target.value);
        console.log();
    }

  return (
    <>
    <div style={{marginTop:10}}>
        <input type='text' value={txtname} onChange={handlechange} />
        </div>
    </>
  )
}

export default Mycom
