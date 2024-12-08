import { Box, Card, CardContent, Typography } from "@mui/material"

type ArticleCardProps = {
  title: string
  userName: string
  fromToday: string
}

const omit = (text: string) => (len: number) => (ellipsis: string) =>
  text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text

export const ArticleCard = ({title, userName, fromToday}: ArticleCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography
          component='h3'
          sx={{
            mb: 2,
            minHeight: 48,
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 1.5
          }}
        >
          {omit(title)(45)('...')}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography sx={{ fontSize: 12}}>{userName}</Typography>
          <Typography sx={{ fontSize: 12}}>{fromToday}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}