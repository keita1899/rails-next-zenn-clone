import { Card, List } from '@mui/material'
import { ArticleInfoItem } from './ArticleInfoItem'

type ArticleInfoItem = {
  icon: JSX.Element
  label: string
  value: string
  divider?: boolean
}

type ArticleInfoListProps = {
  articleInfoList: ArticleInfoItem[]
}

export const ArticleInfoList = ({ articleInfoList }: ArticleInfoListProps) => {
  console.log(articleInfoList)
  return (
    <Card sx={{ boxShadow: 'none', borderRadius: '12px' }}>
      <List sx={{ color: '#6e7b85' }}>
        {articleInfoList.map((item, index) => (
          <ArticleInfoItem
            icon={item.icon}
            label={item.label}
            value={item.value}
            divider={index !== articleInfoList.length - 1}
            key={index}
          />
        ))}
      </List>
    </Card>
  )
}
