import React from 'react'
import AuthMiddleware from "@/components/AuthMiddleware";

const page = () => {
  return (
    <AuthMiddleware>
      <div>Lets Fix Your Setting</div>
    </AuthMiddleware>
  )
}

export default page