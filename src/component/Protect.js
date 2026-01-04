import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protect({children,role}) {
    if(!role.includes("admin")){
        return <Navigate to="/" />
    }
  return children
}
