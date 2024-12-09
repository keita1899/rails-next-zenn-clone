type snackbarStateType = {
  message: null | string
  severity: null | 'success' | 'error'
  pathname: null | string
}

export const showSnackbar = (
  setSnackbar: (value: snackbarStateType) => void,
  message: string,
  severity: 'success' | 'error',
  pathname: string,
) => {
  setSnackbar({ message, severity, pathname })
}
