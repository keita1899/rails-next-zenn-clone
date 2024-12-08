import { Box, ListItem, ListItemText } from '@mui/material'

type ArticleInfoItemProps = {
  icon: JSX.Element
  label: string
  value: string
  divider?: boolean
}

export const ArticleInfoItem = ({
  icon,
  label,
  value,
  divider = true,
}: ArticleInfoItemProps) => {
  return (
    <ListItem divider={divider}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ pr: 1 }}>{icon}</Box>
          <ListItemText primary={label} />
        </Box>
        <Box>
          <ListItemText primary={value} />
        </Box>
      </Box>
    </ListItem>
  )
}
