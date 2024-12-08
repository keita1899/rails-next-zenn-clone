import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
} from '@mui/material'
import Link from 'next/link'
import { useUserState } from '../../hooks/useGlobalState'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { getAuthApiHeaders } from '@/utils/apiHeaders'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { Logo } from './Logo'
import { PersonIcon } from '@/utils/icons'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  const router = useRouter()
  const [user] = useUserState()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const hideHeaderPathnames = ['/current/articles/edit/[id]']
  if (hideHeaderPathnames.includes(router.pathname)) return <></>

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const addNewArticle = () => {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/current/articles`

    const headers = getAuthApiHeaders()

    axios({ method: 'POST', url: url, headers: headers })
      .then((res: AxiosResponse) => {
        router.push(`/current/articles/edit/${res.data.id}`)
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message)
      })
  }

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        py: '12px',
      }}
    >
      <Container maxWidth='lg' sx={{ px: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Logo width={133} height={40} />
          {user.isFetched && (
            <>
              {!user.isSignedIn && (
                <Box>
                  <Button
                    color='primary'
                    variant='contained'
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      fontSize: 16,
                      borderRadius: 2,
                      boxShadow: 'none',
                    }}
                    onClick={() => {
                      router.push('/sign_in')
                    }}
                  >
                    Sign in
                  </Button>
                  <Link href='/sign_up'>
                    <Button
                      color='primary'
                      variant='outlined'
                      sx={{
                        textTransform: 'none',
                        fontSize: 16,
                        borderRadius: 2,
                        boxShadow: 'none',
                        border: '1.5px solid #3EA8FF',
                        ml: 2,
                      }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Box>
              )}
              {user.isSignedIn && (
                <Box sx={{ display: 'flex' }}>
                  <IconButton onClick={handleClick} sx={{ p: 0 }}>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </IconButton>
                  <Box sx={{ ml: 2 }}>
                    <Button
                      color='primary'
                      variant='contained'
                      sx={{
                        color: 'white',
                        textTransform: 'none',
                        fontSize: 16,
                        borderRadius: 2,
                        width: 100,
                        boxShadow: 'none',
                      }}
                      onClick={addNewArticle}
                    >
                      Add new
                    </Button>
                  </Box>
                  <HeaderMenu
                    anchorEl={anchorEl}
                    open={open}
                    handleClose={handleClose}
                    username={user.name}
                  />
                </Box>
              )}
            </>
          )}
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header