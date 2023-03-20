import React from 'react'
import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import SideNav from './SideNav'


function Profile() {
  const {currentUser} = useAuthValue()

  return (
    <React.Fragment>
    <SideNav></SideNav>
      <div className='view'>
        <h1>16 March, 2023</h1>
        <ul>
          <li>Overview</li>
          <li>Projects</li>
          <li>Timeline</li>
          <li>Discussion</li>
        </ul>
      </div>


      <div className='right'>
        <div className='profile'>
          <h1>Welcome Back!</h1>
          <h3>Kapil Soni</h3>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <span onClick={() => signOut(auth)}>Sign Out</span>
        </div>
      </div>
      </React.Fragment>
      
  )
}

export default Profile
