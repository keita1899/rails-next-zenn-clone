export const getAuthApiHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'access-token': localStorage.getItem('access-token'),
    client: localStorage.getItem('client'),
    uid: localStorage.getItem('uid'),
  }
}

export const getDefaultApiHeaders = () => {
  return {
    'Content-Type': 'application/json',
  }
}
