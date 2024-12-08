import { Box } from '@mui/material'
import { ArticleInfoList } from './ArticleInfoList'

type ArticleInfoItem = {
  icon: JSX.Element
  label: string
  value: string
  divider?: boolean
}

type ArticleSidebarProps = {
  articleInfoList: ArticleInfoItem[]
}

export const ArticleSidebar = ({ articleInfoList }: ArticleSidebarProps) => {
  return (
    <Box
      sx={{
        display: { xs: 'none', lg: 'block' },
        width: 300,
        minWidth: 300,
      }}
    >
      <ArticleInfoList articleInfoList={articleInfoList} />
    </Box>
  )
}
