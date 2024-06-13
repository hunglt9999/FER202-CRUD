import React, { useState, useEffect, useRef } from 'react';
import { Alert, Form, FormGroup, FormControl, Button, ButtonGroup, Table } from 'react-bootstrap';
import { ListItems } from '../../products'

export default function Product() {

  const init = {
    id: '',
    name: '',
    price: '',
    stockValue: 'stocking',
    image: ''
  }

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || ListItems);
  const [infor, setInfo] = useState(init);
  const [update, setUpdate] = useState(false);

  return (
    <Alert className='primary'>
      <h1>List of products</h1>

      <Form style={{ marginTop: 10 }}>
        <FormGroup>
          <label>Product id:</label>
          <FormControl

            name='id'
            type='number'
            placeholder='enter id'
          />
        </FormGroup>
        <FormGroup>
          <label>Product name:</label>
          <FormControl
            name='name'
            type='text'
            placeholder='enter name'
          />
        </FormGroup>
        <FormGroup>
          <label>Product price:</label>
          <FormControl
            name='price'
            type='number'
            placeholder='enter price'
          />
        </FormGroup>
        <FormGroup className='d-flex flex-row'>
          <legend className='col-form-label col-sm-1 pt-2'>Stock:</legend>
          <div className='col-2 pt-2'>
            <input value='stocking'
              name='stockValue'
              type='radio'

            />
            <label>stocking</label>
          </div>
          <div className='col-2 pt-2'>
            <input value='outofstock'
              name='stockValue'
              type='radio'

            />
            <label>out of stock</label>
          </div>
        </FormGroup>
        <FormGroup>
          <label>Image:</label>
          <FormControl
            name='image'
            type='text'
            placeholder='enter url for image'
          />
        </FormGroup>
      </Form>

      <ButtonGroup className='d-flex flex-row' style={{ marginTop: 15 }}>
        <Button className='btn btn-primary' style={{ marginRight: 10 }}>Save</Button>
        <Button className='btn btn-primary' style={{ marginRight: 10 }}>Update</Button>
        <Button className='btn btn-success' style={{ marginRight: 10 }}>Sort by name</Button>
        <Button className='btn btn-success' style={{ marginRight: 10 }}>Sort by price</Button>
        <Button className='btn btn-info' style={{ marginRight: 10 }}>Search</Button>
      </ButtonGroup>


      <Table className='table table-bordered table-striped table-hover'
        style={{ marginTop: 15 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((p) => (
              <tr key={p.id} onClick={() => {
                setInfo({
                  id: p.id,
                  name: p.name,
                  price: p.price,
                  stockValue: p.stock ? 'stocking' : 'outofstock',
                  image: p.image,
                })
                setUpdate(true)
              }}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.stock ? 'stocking' : 'out of stock'}</td>
                <td>
                  <img src={p.image} height={100} width={80} />
                </td>
                {/* <td><Button onClick={() => deleteProduct(`${p.id}`)} className='btn btn-danger'>Delete</Button></td> */}
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Alert>
  )
}
