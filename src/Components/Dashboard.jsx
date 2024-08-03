import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import AxiosService from './../Utils/AxiosService'
import ApiRoutes from '../Utils/ApiRoutes';
import Placeholder from './../assets/Placeholder.jpg'
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const navigate = useNavigate()

  let [data,setData]=useState([])

  let getData =async()=>{
    try{
          let response = await AxiosService.get(ApiRoutes.D_BLOG.path)
          if(response.status===200){
            setData(response.data)
          }
    }catch(Error){
      toast(Error.response.message || "Internal server error")
    }
  }
  useEffect(()=>{
    getData()
  },[])

  let handleDelete= async(id)=>{
    try{
        let response= await AxiosService.delete(`${ApiRoutes.D_BLOG.path}/${id}`)
        if(response.status===200){
          toast.success("Blog deleted successfully")
          getData()
        }
    }catch(Error){
      toast(Error.response.message || "Internal server error")
    }
  }

  return <> <div className="container">
  <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Desciption</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
         {
          data.map((e,i)=>{
            return<tr key={i}>
              <td>{i+1}</td>
              <td>{e.title}</td>
              <td><img src={e.image?e.image:Placeholder} alt={e.title} style={{width:'150px', height:'100px', objectFit:'cover', objectPosition: "10% 1%"}} /></td>
              <td><div className="description">{e.description}</div></td>
              <td>{e.status?"ACTIVE":"INACTIVE"}</td>
              <td style={{display:'flex',gap:'10px'}}> <Grid item xs={8}>
                   <EditIcon onClick={()=>navigate(`/blog/${e.id}`)} />
                   </Grid>
                   <Grid item xs={8}><DeleteIcon onClick={()=>handleDelete(e.id)} /></Grid>
                   </td>
              </tr>
          })
         }
        
      </tbody>
    </Table>
  </div>
  </>
}

export default Dashboard