import { useState } from 'react'
import { useRouter } from 'next/router'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useSnackbarState } from './useGlobalState'
import { getDefaultApiHeaders } from '@/utils/apiHeaders'

type SignUpFormData = {
  email: string
  password: string
  name: string
}

export const useSignUp = () => {
  const router = useRouter()
  const [, setSnackbar] = useSnackbarState()
  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, control } = useForm<SignUpFormData>({
    defaultValues: { email: '', password: '', name: '' },
  })

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    setIsLoading(true)
    const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/auth'
    const headers = getDefaultApiHeaders()
    const confirmSuccessUrl =
      process.env.NEXT_PUBLIC_FRONT_BASE_URL + '/sign_in'

    try {
      const res: AxiosResponse = await axios.post(
        url,
        { ...data, confirm_success_url: confirmSuccessUrl },
        { headers }
      )
      localStorage.setItem('access-token', res.headers['access-token'] || '')
      localStorage.setItem('client', res.headers['client'] || '')
      localStorage.setItem('uid', res.headers['uid'] || '')
      setSnackbar({
        message: '認証メールをご確認ください',
        severity: 'success',
        pathname: '/',
      })
      router.push('/')
    } catch (e: AxiosError<{ error: string }>) {
      console.error(e.message)
      setSnackbar({
        message: '不正なユーザー情報です',
        severity: 'error',
        pathname: '/sign_up',
      })
      setIsLoading(false)
    }
  }

  return { handleSubmit, control, onSubmit, isLoading }
}
