import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'

function ElementColor() {
    const {id,textcolor,backcolor} = useParams();
    const myStyle = {
        color: textcolor,
        backgroundColor: backcolor,
      };
  return (
    <div>
        <h1 style={myStyle}>The word is: {id}</h1>
    </div>
  )
}

export default ElementColor