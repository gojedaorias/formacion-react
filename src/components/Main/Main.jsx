import React from 'react'
import Button from '../Button/Button'
import './Main.css'

const Main = (props) => {
  return (
    <div className='main'>
      <h1>{props.text}</h1>
      <Button 
      variante="cancelar" 
      text="Cancelar" 
      />
      <Button clase="confirmar" text="Confirmar"/>
      <Button variante="confirmar" text="aceptar"/>

    </div>
  )
}
export default Main 