import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard Hi You are nice.</h1>
      <Link to="test">Test</Link>
      <Link to="testone">TestOne</Link>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
