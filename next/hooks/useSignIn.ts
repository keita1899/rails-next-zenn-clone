import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSnackbarState, useUserState } from './useGlobalState'
import { SubmitHandler, useForm } from 'react-hook-form'
import { getDefaultApiHeaders } from '@/utils/apiHeaders'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { storeAuthToken } from '@/utils/storeAuthToken'
import { showSnackbar } from '@/utils/showSnackbar'

type SignInFormData = {
  email: string
  password: string
}

export const useSignIn = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useUserState()
  const [, setSnackbar] = useSnackbarState()

  const { handleSubmit, control } = useForm<SignInFormData>({
    defaultValues: { email: '', password: '' },
  })

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    setIsLoading(true)
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/sign_in`
    const headers = getDefaultApiHeaders()

    axios({ method: 'POST', url: url, data: data, headers: headers })
      .then((res: AxiosResponse) => {
        storeAuthToken(res.headers)

        setUser({
          ...user,
          isFetched: false,
        })
        showSnackbar(setSnackbar, 'サインインに成功しました', 'success', '/')
        router.push('/')
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message)
        showSnackbar(
          setSnackbar,
          '登録ユーザーが見つかりません',
          'error',
          '/sign_in'
        )
        setIsLoading(false)
      })
  }

  return { handleSubmit, control, onSubmit, isLoading }
}
