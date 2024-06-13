/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Navbar,Form,FormControl,Button} from 'react-bootstrap'
import Menu from './Menu';

export default function Header() {
  return (
    <Navbar bg='primary' variant='dark' className='d-flex'>
        <img src='./logo192.png' width={50} height={50}/>
        <Menu/>
        <Form className='d-flex'>
           <FormControl type='text' placeholder='Search' className='mr-sm-2'/>
           <Button variant='outline-light'>Search</Button>
        </Form>      
    </Navbar>
  )
}
