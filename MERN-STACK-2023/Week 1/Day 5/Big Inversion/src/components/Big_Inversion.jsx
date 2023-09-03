import React from 'react'

const Big_Inversion = props => {
  return (
    <div>
        <h1>{ props.firstName }, { props.lastName }</h1>
        <p>Age: { props.age }</p>
        <p>Hair Color: { props.hairColor }</p>
    </div>
  )
}

export default Big_Inversion