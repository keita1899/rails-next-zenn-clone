import { NextPage } from 'next'
import { useEffect } from 'react'
import { useSignOut } from '../../hooks/useSignOUt'

const SignOut: NextPage = () => {
  const { signOut } = useSignOut()
  useEffect(() => {
    signOut()
  }, [signOut])

  return <></>
}
export default SignOut
