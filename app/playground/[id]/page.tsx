"use client";
import { useParams } from 'next/navigation'
import React from 'react'

const MainPlaygroundPage = () => {
    const  {id} = useParams<{id:string}>();
  return (
    <div>
      params : {id}
    </div>
  )
}

export default MainPlaygroundPage