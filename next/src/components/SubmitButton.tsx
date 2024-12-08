import { LoadingButton } from '@mui/lab'

type SubmitButtonProps = {
  isLoading: boolean
  text: string
}

export const SubmitButton = ({ isLoading, text }: SubmitButtonProps) => {
  return (
    <LoadingButton
      variant='contained'
      type='submit'
      loading={isLoading}
      sx={{ fontWeight: 'bold', color: 'white' }}
    >
      {text}
    </LoadingButton>
  )
}
