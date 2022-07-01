import React from 'react'
import { useRouter } from 'next/router'

const Profile = () => {
  const {query: {id}} = useRouter()

  return (
    <div>
      <h2>
        Hello, my name is: {id}
      </h2>
    </div>
  )
}

export default Profile  