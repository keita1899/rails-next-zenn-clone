import { ArticleIcon, SettingsIcon } from '@/utils/icons'
import { Box, Container, Typography } from '@mui/material'

type ArticleHeaderInfoProps = {
  status: string
  createdAt: string
}

export const ArticleHeaderInfo = ({
  status,
  createdAt,
}: ArticleHeaderInfoProps) => {
  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'none' },
        alignItems: 'center',
        backgroundColor: 'white',
        borderTop: '0.5px solid #acbcc7',
        height: 56,
        pl: 4,
        color: '#6e7b85',
      }}
    >
      <Container
        maxWidth='sm'
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Box sx={{ display: 'flex', gap: '0 8px' }}>
          <SettingsIcon />
          <Typography
            component='p'
            sx={{ mr: 1, fontSize: { xs: 14, sm: 16 } }}
          >
            ステータス: {status}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '0 8px' }}>
          <ArticleIcon />
          <Typography
            component='p'
            sx={{ mr: 1, fontSize: { xs: 14, sm: 16 } }}
          >
            公開: {createdAt}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
