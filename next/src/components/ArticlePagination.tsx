import { Box, Pagination } from '@mui/material'

type ArticlePaginationProps = {
  count: number
  page: number
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void
}

export const ArticlePagination = ({ count, page, onChange }: ArticlePaginationProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
      <Pagination count={count} page={page} onChange={onChange} />
    </Box>
  )
}
