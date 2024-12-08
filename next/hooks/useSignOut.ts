import { useRouter } from 'next/router'
import { useSnackbarState, useUserState } from './useGlobalState'

export const useSignOut = () => {
  const router = useRouter()
  const [, setUser] = useUserState()
  const [, setSnackbar] = useSnackbarState()

  const signOut = () => {
    localStorage.clear()
    setUser({
      id: 0,
      name: '',
      email: '',
      isSignedIn: false,
      isFetched: true,
    })
    setSnackbar({
      message: 'サインアウトに成功しました',
      severity: 'success',
      pathname: '/',
    })
    router.push('/')
  }

  return { signOut }
}
