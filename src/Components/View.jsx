import React, { useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import toast from 'react-hot-toast';
import Image from './Image';
import ApiRoutes from '../Utils/ApiRoutes';
import AxiosService from './../Utils/AxiosService'
import { useNavigate, useParams } from 'react-router-dom';

function View(){
  let [image,setImage]=useState("")
  let [title,setTitle]=useState("")
  let [description,setDescription]=useState("")
  let {id}= useParams()

  let navigate = useNavigate()

  let getData = async(id)=>{
    try{
      let response = await AxiosService.get(`${ApiRoutes.D_BLOG.path}/${id}`)
    if(response.status===200){
      setImage(response.data.image)
      setDescription(response.data.description)
      setTitle(response.data.title)
    }
    }catch(Error){
      toast.error(Error.response.message || "Internal Server Error")
    }
  }
  
  useEffect(()=>{
    if(id)
      getData(id)
  },[])

  let handleSave= async()=>{
    try{
      let response= await AxiosService.put(`${ApiRoutes.D_BLOG.path}/${id}`,{image,title,description})
      if(response.status===200)
        {
        toast.success("Blog Edited succesfully")
        navigate('/dashboard')
      }
    }catch(error){
      toast.error(error.response.message || "Internal Server Error")
    }
  }
  return <>
    <div className='display-grid'>
    <div className='form-wrapper'>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Type blog title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" placeholder="Add image URL" value={image} onChange={(e)=>setImage(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Type description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)}/> 
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

export default View