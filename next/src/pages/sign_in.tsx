import { Box, Container, Stack, TextField, Typography } from '@mui/material'
import { NextPage } from 'next'
import { Controller } from 'react-hook-form'
import { validationRules } from '@/utils/validationRules'
import { SubmitButton } from '@/components/SubmitButton'
import { useSignIn } from '../../hooks/useSignIn'

const SignIn: NextPage = () => {
  const { handleSubmit, control, onSubmit, isLoading } = useSignIn()

  return (
    <Box
      sx={{
        backgroundColor: '#EDF2F7',
        minHeight: 'calc(100vh - 57px)',
      }}
    >
      <Container maxWidth='sm'>
        <Box sx={{ mb: 4, pt: 4 }}>
          <Typography
            component='h2'
            sx={{ fontSize: 32, color: 'black', fontWeight: 'bold' }}
          >
            Sign in
          </Typography>
        </Box>
        <Stack component='form' onSubmit={handleSubmit(onSubmit)} spacing={4}>
          <Controller
            name='email'
            control={control}
            rules={validationRules.email}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type='email'
                label='メールアドレス'
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                sx={{ backgroundColor: 'white' }}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            rules={validationRules.password}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type='password'
                label='パスワード'
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                sx={{ backgroundColor: 'white' }}
              />
            )}
          />
          <SubmitButton isLoading={isLoading} text='送信する' />
        </Stack>
      </Container>
    </Box>
  )
}
export default SignIn
