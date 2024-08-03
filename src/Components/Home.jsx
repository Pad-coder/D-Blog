import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ApiRoutes from '../Utils/ApiRoutes'
import AxiosService from '../Utils/AxiosService'
import Feed from './../Common/Feed'

function Home() {
  let [data,setData]= useState([])

  let getData = async()=>{
    try {
        let response = await AxiosService.get(ApiRoutes.D_BLOG.path)
        if(response.status===200)
          {
              setData(response.data)
          }
    } catch (error) {
      toast(error.response.message || "Internal Server Error")
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return <div className='home-wrapper'>
  {
    data.map((e)=>{
      return <div className='feeds'>
        <Feed
        title={e.title}
        image={e.image}
        description={e.description}
        />
      </div>
    })
  }
</div>
}

export default Home