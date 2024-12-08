import { Box, Card } from '@mui/material'
import { MarkdownText } from './MarkdownText'

type ArticleMainProps = {
  content: string
}

export const ArticleMain = ({ content }: ArticleMainProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Card
        sx={{
          boxShadow: 'none',
          borderRadius: '12px',
          maxWidth: 840,
          m: '0 auto',
        }}
      >
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
