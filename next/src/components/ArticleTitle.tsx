import { Typography } from '@mui/material'

type ArticleTitleProps = {
  title: string
}

export const ArticleTitle = ({ title }: ArticleTitleProps) => {
  return (
    <Typography
      component='h2'
      sx={{ fontSize: { xs: 21, sm: 25 }, fontWeight: 'bold' }}
    >
      {title}
    </Typography>
  )
}
