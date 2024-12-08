import { ArticleIcon } from '@/utils/icons'
import { Logout } from '@mui/icons-material'
import {
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import Link from 'next/link'

type HeaderMenuProps = {
  anchorEl: HTMLElement | null
  open: boolean
  handleClose: () => void
  username: string
}

const HeaderMenu = ({
  anchorEl,
  open,
  handleClose,
  username,
}: HeaderMenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id='account-menu'
      open={open}
      onClose={handleClose}
      onClick={handleClose}
    >
      <Box sx={{ pl: 2, py: 1 }}>
        <Typography sx={{ fontWeight: 'bold' }}>{username}</Typography>
      </Box>
      <Divider />
      <Link href='/current/articles'>
        <MenuItem>
          <ListItemIcon>
            <ArticleIcon fontSize='small' />
          </ListItemIcon>
          記事の管理
        </MenuItem>
      </Link>
      <Link href='/sign_out'>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          サインアウト
        </MenuItem>
      </Link>
    </Menu>
  )
}

export default HeaderMenu