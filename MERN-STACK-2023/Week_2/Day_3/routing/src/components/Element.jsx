import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'

function Element() {
    const {id} = useParams();
  return (
    <div>
        {isNaN(+id) ? <h1>The word is: {id}</h1> : <h1>The number is: {id}</h1>}
    </div>
  )
}

export default Element