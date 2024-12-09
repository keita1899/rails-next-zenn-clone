import { NextPage } from 'next'
import { useEffect } from 'react'
import { useSignOut } from '../../hooks/useSignOut'

const SignOut: NextPage = () => {
  const { signOut } = useSignOut()
  useEffect(() => {
    signOut()
  }, [signOut])

  return <></>
}
export default SignOut
