import React from 'react'

function FunctionClick() {
    function jay(){
        console.log('button clicked');
    }
  return (
    <div>
        <button onClick={jay}>
            click
        </button>
    </div>
  )
}

export default FunctionClick