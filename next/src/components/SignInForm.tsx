// import { Stack, TextField } from "@mui/material"
// import { SubmitButton } from "./SubmitButton"
// import { Control, Controller } from 'react-hook-form'

// type SignInFormProps = {
//   control: Control<SignInFormData, any>
//   rules: 
//   isLoading: boolean
// }

// export const SignInForm = ({control, handleSubmit, onSubmit, rules}: SignInFormProps) => {
//   return (
//     <Stack component='form' onSubmit={handleSubmit(onSubmit)} spacing={4}>
//           <Controller
//             name='email'
//             control={control}
//             rules={validationRules.email}
//             render={({ field, fieldState }) => (
//               <TextField
//                 {...field}
//                 type='email'
//                 label='メールアドレス'
//                 error={fieldState.invalid}
//                 helperText={fieldState.error?.message}
//                 sx={{ backgroundColor: 'white' }}
//               />
//             )}
//           />
//           <Controller
//             name='password'
//             control={control}
//             rules={validationRules.password}
//             render={({ field, fieldState }) => (
//               <TextField
//                 {...field}
//                 type='password'
//                 label='パスワード'
//                 error={fieldState.invalid}
//                 helperText={fieldState.error?.message}
//                 sx={{ backgroundColor: 'white' }}
//               />
//             )}
//           />
//           <SubmitButton isLoading={isLoading} text='送信する' />
//         </Stack>
//   )
// }