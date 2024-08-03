import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import toast from 'react-hot-toast';
import Image from './Image';
import ApiRoutes from '../Utils/ApiRoutes';
import AxiosService from './../Utils/AxiosService'
import { useNavigate } from 'react-router-dom';

function Create(){
  let [image,setImage]=useState("")
  let [title,setTitle]=useState("")
  let [description,setDescription]=useState("")

  let navigate = useNavigate()

  let handleSave= async()=>{
    try{
      let response= await AxiosService.post(ApiRoutes.D_BLOG.path,{image,title,description,status:true})
      if(response.status===201)
        {
        toast.success("Blog posted succesfully")
        navigate('/dashboard')
      }
    }catch(error){

    }
  }
  return <>
    <div className='display-grid'>
    <div className='form-wrapper'>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Type blog title" onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" placeholder="Add image URL" onChange={(e)=>setImage(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Type description</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e)=>setDescription(e.target.value)}/> 
      </Form.Group>
      <Button variant='primary' style={{backgroundColor:"#212529", borderColor:"#212529"}} onClick={handleSave}>Save</Button>
    </Form>
    </div>
    
    <div className='image-wrapper'>
      <Image
       image={image}
       title={title}
       description={description}
      />
    </div>
    </div>
    </>
}

export default Create