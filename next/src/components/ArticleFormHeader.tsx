import { LoadingButton } from '@mui/lab'
import {
  AppBar,
  Box,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { ArrowBackSharpIcon } from '@/utils/icons'

type ArticleFormHeaderProps = {
  previewChecked: boolean
  statusChecked: boolean
  isLoading: boolean
  handleChangePreviewChecked: () => void
  handleChangeStatusChecked: () => void
}

export const ArticleFormHeader = ({
  previewChecked,
  statusChecked,
  isLoading,
  handleChangePreviewChecked,
  handleChangeStatusChecked,
}: ArticleFormHeaderProps) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#EDF2F7' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: 50 }}>
          <Link href="/current/articles">
            <IconButton>
              <ArrowBackSharpIcon />
            </IconButton>
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: '0 16px', sm: '0 24px' },
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Switch
              checked={previewChecked}
              onChange={handleChangePreviewChecked}
            />
            <Typography sx={{ fontSize: { xs: 12, sm: 15 } }}>
              プレビュー表示
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Switch
              checked={statusChecked}
              onChange={handleChangeStatusChecked}
            />
            <Typography sx={{ fontSize: { xs: 12, sm: 15 } }}>
              下書き／公開
            </Typography>
          </Box>
          <LoadingButton
            variant="contained"
            type="submit"
            loading={isLoading}
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: { xs: 12, sm: 16 },
            }}
          >
            更新する
          </LoadingButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
