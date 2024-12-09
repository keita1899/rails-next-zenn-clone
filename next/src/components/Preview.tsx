import { Box, Card, Typography } from '@mui/material'
import { MarkdownText } from './MarkdownText'

type PreviewProps = {
  title: string
  content: string
}

export const Preview = ({ title, content }: PreviewProps) => {
  return (
    <Box sx={{ width: 840 }}>
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: 21, sm: 25 },
          fontWeight: 'bold',
          textAlign: 'center',
          pt: 2,
          pb: 4,
        }}
      >
        {title}
      </Typography>
      <Card sx={{ boxShadow: 'none', borderRadius: '12px' }}>
        <Box
          sx={{
            padding: { xs: '0 24px 24px 24px', sm: '0 40px 40px 40px' },
            marginTop: { xs: '24px', sm: '40px' },
          }}
        >
          <MarkdownText content={content} />
        </Box>
      </Card>
    </Box>
  )
}
