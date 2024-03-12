import React from 'react'
import SportCatelogue from '../../Catelogue/SportCatelogue'
import Button from "../../Button/Button"
function Stander() {
  return (
    <>
    
    <div className="mt-36 p-6 bg-white min-h-screen ">
        <div className="flex items-center  justify-center absolute right-[8%] md: top-[39%]">
          <Button title={"Best-Selling"} />
        </div>
      <div>
        <h1 className="text-center mb-5 ">Sports Medal Hangers</h1>
      </div>
     
      <SportCatelogue></SportCatelogue>
      </div>
    </>
  )
}

export default Stander