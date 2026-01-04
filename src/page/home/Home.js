import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h1>Welcome to Home.</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/form">Form</Link>
      <Link to="/admin">Admin</Link>
    </div>
  )
}
