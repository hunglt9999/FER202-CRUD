import React from 'react';
import {Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

export default function Menu() {
  return (
    <>
    <Nav className='d-flex flex-row' style={{marginLeft:200,marginRight:200}}>
     <NavLink className='p-3'
            style={({isActive})=>({
                color:isActive?'chocolate':'white',
                textDecoration:'none',
                fontSize:isActive?'24px':'20px'
            })}   to='/'>Home</NavLink>
      <NavLink className='p-3'
            style={({isActive})=>({
                color:isActive?'chocolate':'white',
                textDecoration:'none',
                fontSize:isActive?'24px':'20px'
            })}   to='/product'>Products</NavLink>
        <NavLink className='p-3'
            style={({isActive})=>({
                color:isActive?'chocolate':'white',
                textDecoration:'none',
                fontSize:isActive?'24px':'20px'
            })}   to='/about'>About us</NavLink>          
    </Nav>  
    </>
  )
}
