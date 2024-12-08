import { useEffect } from 'react'
import { useUserState } from '../../hooks/useGlobalState'
import axios, { AxiosError, AxiosResponse } from 'axios'

export const CurrentUserFetch = () => {
  const [user, setUser] = useUserState()

  useEffect(() => {
    // 取得していれば早期リターン
    if (user.isFetched) {
      return
    }

    if (localStorage.getItem('access-token')) {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/current/user`
      axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
            'access-token': localStorage.getItem('access-token'),
            client: localStorage.getItem('client'),
            uid: localStorage.getItem('uid'),
          },
        })
        .then((res: AxiosResponse) => {
          setUser({
            ...user,
            ...res.data,
            isSignedIn: true,
            isFetched: true,
          })
        })
        .catch((err: AxiosError<{ error: string }>) => {
          console.log(err.message)
          setUser({
            ...user,
            isFetched: true,
          })
        })
    } else {
      setUser({
        ...user,
        isFetched: true,
      })
    }
  }, [user, setUser])

  return <></>
}
