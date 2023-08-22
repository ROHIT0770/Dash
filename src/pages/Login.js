import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

const Login = () => {
  const {data: session} = useSession()

  if (session) {
    return (
      <div>
        <p>{session.user.email}</p>
        <button onClick={() => signOut()}>SignOut</button>
      </div>
    )
  }
  return (
    <div>
      <p>Not signed IN</p>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  )
}

export default Login;
