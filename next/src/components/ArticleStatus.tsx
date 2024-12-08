import { Box } from '@mui/material'

type ArticleStatusProps = {
  status: '下書き' | '公開中'
}

export const ArticleStatus = ({ status }: ArticleStatusProps) => {
  const styles = {
    下書き: {
      color: '#9FAFBA',
      border: '1px solid #9FAFBA',
    },
    公開中: {
      color: '#3EA8FF',
      border: '1px solid #3EA8FF',
    },
  }

  return (
    <Box
      sx={{
        display: 'inline',
        fontSize: 12,
        textAlign: 'center',
        p: '4px',
        borderRadius: 1,
        fontWeight: 'bold',
        ...styles[status],
      }}
    >
      {status}
    </Box>
  )
}
