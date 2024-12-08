import { useRouter } from "next/router"
import { useSnackbarState, useUserState } from "./useGlobalState"
import { useEffect } from "react"

export const useRequireSignedIn = () => {
  const router = useRouter()
  const [user] = useUserState()
  const [, setSnackbar] = useSnackbarState()

  useEffect(() => {
    if (user.isFetched && !user.isSignedIn) {
      setSnackbar({
        message: 'サインインしてください',
        severity: 'error',
        pathname: '/sign_in'
      })
      router.push('/sign_in')
    }
  }, [user, router, setSnackbar])
}